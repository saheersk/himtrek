import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR from 'swr';

export const fetchPackage = createAsyncThunk(
  "events/fetchPackage",
  async ({ month, state, category, city, sort }) => {
    const response = await axios.get(`${BASE_URL}/packages/travel-packages/`, {
      params: {
        month,
        state,
        category,
        city,
        sort,
      },
    });
    return response.data.data;
  }
);

const packageSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackage.pending, (state) => {})
      .addCase(fetchPackage.fulfilled, (state, action) => {
        state.packages = action.payload;
      })
      .addCase(fetchPackage.rejected, (state, action) => {})
  },
});

export const { setData } = packageSlice.actions;

export const usePackage = ({ month = "", state = "", category = "", city = "", sort = "" } = {}) => {
  const url = `${BASE_URL}/packages/travel-packages/?month=${month}&state=${state}&category=${category}&city=${city}&sort=${sort}`;
  const { data, error } = useSWR(url, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};


export default packageSlice.reducer;
