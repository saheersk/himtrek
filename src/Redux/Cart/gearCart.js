import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const gearCartSlice = createSlice({
  name: "gearCart",
  initialState: {
    gearCart: [],
    message: "",
    isGear: false,
  },
  reducers: {
    setGearCart: (state, action) => {
      state.gearCart = action.payload;
      if (state.gearCart.length !== 0) {
        state.isGear = true;
      } else {
        state.isGear = false;
      }
    },
  },
});

export const useGearCartProduct = ({ token, dispatch }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data, error } = useSWR(
    `${BASE_URL}/packages/cart/gears/`,
    async (url) => {
      const response = await axios.get(url, config);
      return response.data.data;
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setGearCart(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const useAddToGearCart = ({ token }) => {
  const dispatch = useDispatch();

  const { data } = useGearCartProduct({ token: token, dispatch });

  const AddToGearCartHandler = async ({ productId, token, slug }) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.post(
        `${BASE_URL}/packages/cart/gear/add/${productId}/package/${slug}/`,
        null,
        config
      );
      mutate(`${BASE_URL}/packages/cart/gears/`, false);
    } catch (error) {
      console.log(error);
    }
  };

  return { AddToGearCartHandler, loading: !data };
};

export const useRemoveFromGearCart = ({ token }) => {
  const dispatch = useDispatch();

  const { data } = useGearCartProduct({ token: token, dispatch });

  const removeFromGearCartHandler = async ({ productId, token }) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete(
        `${BASE_URL}/packages/cart/gear/remove/${productId}/`,
        null,
        config
      );
      mutate(`${BASE_URL}/packages/cart/gears/`);
    } catch (error) {
      console.log(error);
    }
  };

  return { removeFromGearCartHandler, loading: !data };
};

export const useGearItemAddOrSub = ({ token }) => {
  const dispatch = useDispatch();

  const { data } = useGearCartProduct({ token: token, dispatch });

  const gearItemAddOrSubHandler = async ({ productId, token, action }) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.put(
        `${BASE_URL}/packages/cart/gear/update-day/${productId}/?days=${action}`,
        null,
        config
      );
      mutate(`${BASE_URL}/packages/cart/gears/`);
    } catch (error) {
      console.log(error);
    }
  };

  return { gearItemAddOrSubHandler, loading: !data };
};

export const { setGearCart } = gearCartSlice.actions;

export default gearCartSlice.reducer;
