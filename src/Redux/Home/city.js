import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR from 'swr';

export const fetchCity = createAsyncThunk("cities/fetchCity", async () => {
  const response = await axios.get(`${BASE_URL}/packages/city/`);
  return response.data.data;
});

const citySlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {})
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.cities = action.payload;
      })
      .addCase(fetchCity.rejected, (state, action) => {});
  },
});

export const { setData } = citySlice.actions;

export const useCity = () => {
  const { data, error } = useSWR(`${BASE_URL}/packages/city/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default citySlice.reducer;
