import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";

export const fetchPackage = createAsyncThunk(
  "events/fetchPackage",
  async () => {
    const response = await axios.get(`${BASE_URL}/packages/travel-packages/`);
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
      .addCase(fetchPackage.rejected, (state, action) => {});
  },
});

export default packageSlice.reducer;
