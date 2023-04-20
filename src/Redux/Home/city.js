import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR from 'swr';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const citySlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
  },
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const useCity = () => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/city/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setCities(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setCities } = citySlice.actions;

export default citySlice.reducer;
