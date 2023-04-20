import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: {
    products: "",
    package_price_per_person: 0,
    package_price_per_children: 0,
    package_price_family_of_four: 0,
    isProducts: null,
  },
  reducers: {
    setCart: (state, action) => {
      if (action.payload.length !== 0) {
        state.isProducts = true;
        state.products = action.payload;
        state.package_price_per_person = action.payload.package.price_for_adult;
        state.package_price_family_of_four =
          action.payload.package.price_for_family_of_four;
        state.package_price_per_children =
          action.payload.package.price_for_children_below_six_years;
      } else {
        state.products = "";
        state.package_price_per_person = 0;
        state.package_price_per_children = 0;
        state.package_price_family_of_four = 0;
        state.isProducts = false;
      }
    },
  },
});

export const useCartProduct = ({ token, dispatch }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data, error } = useSWR(`${BASE_URL}/packages/cart/`, async (url) => {
    const response = await axios.get(url, config);
    return response.data.data[0];
  });

  useEffect(() => {
    if (data) {
      dispatch(setCart(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const useRemoveFromCart = ({ token }) => {
  const dispatch = useDispatch();

  const { data: product = []  } = useCartProduct({ token: token, dispatch });

  const removeFromCartHandler = async ({ productId, token }) => {
    let newData = [{ ...product }];

    newData = newData.filter(product => product.id !== productId);
    
    mutate(`${BASE_URL}/packages/cart/`, newData, false);
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete(
        `${BASE_URL}/packages/cart/remove/${productId}/`,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { removeFromCartHandler };
};

export const useAddToCart = ({ token }) => {
  const dispatch = useDispatch();

  const { data } = useCartProduct({ token: token, dispatch });

  const AddToCartHandler = async ({ slug, token }) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.post(`${BASE_URL}/packages/cart/add/${slug}/`, null, config);
      mutate(`${BASE_URL}/packages/cart/`, false);
    } catch (error) {
      console.log(error);
    }
  };

  return { AddToCartHandler, loading: !data };
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
