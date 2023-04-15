import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";

export const fetchCity = createAsyncThunk("cities/fetchCity", async () => {
  const response = await axios.get(`${BASE_URL}/packages/city/`);
  return response.data.data;
});

const statesSlice = createSlice({
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

export default statesSlice.reducer;
