import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// export const fetchCartProduct = createAsyncThunk(
//   "events/fetchCartProduct",
//   async (token) => {
//     const config = {
//       headers: { Authorization: `Bearer ${token}` },
//     };
//     const response = await axios.get(`${BASE_URL}/packages/cart/`, config);
//     return response.data.data[0];
//   }
// );
// const fetcher = (url, token) => axios.get(url, {
//   headers: { Authorization: `Bearer ${token}` },
// }).then(res => res.data);

export const removeFromCart = createAsyncThunk(
  "cartProducts/removeFromCart",
  async ({ productId, token }) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.delete(
      `${BASE_URL}/packages/cart/remove/${productId}/`,
      config
    );
    console.log("removing");
    return productId;
  }
);

// export const addToCart = createAsyncThunk(
//   'events/addToCart',
//   async ({ slug, token }) => {
//     const config = {
//       headers: { Authorization: `Bearer ${token}` },
//     };
//     try {
//     const response = await axios.post(`${BASE_URL}/packages/cart/add/${slug}/`, null, config);
//     console.log(response.data.data, "res");
//     return response.data.data;
//     }
//     catch(error){
//       console.log(error.response, "errorrr");
//       return error.response.status
//     }
//   }
// );

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
      if (action.payload.length !== 0 ) {
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
  extraReducers: (builder) => {
    builder
      .addCase(removeFromCart.pending, (state) => {})
      .addCase(removeFromCart.fulfilled, (state, action) => {
        if (state.products.id === action.payload) {
          state.products = "";
          state.package_price_per_person = 0;
          state.package_price_per_children = 0;
          state.package_price_family_of_four = 0;
          state.isProducts = false;
        }
      })
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

  const { data: product = [] } = useCartProduct({ token: token, dispatch });
  
  const removeFromCartHandler = ({ productId, token }) => {
    let newData = [{ ...product }];

    newData = newData.filter(product => product.id !== productId);

    mutate(`${BASE_URL}/packages/cart/`, newData, false);

     dispatch(removeFromCart({ productId, token }));

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
