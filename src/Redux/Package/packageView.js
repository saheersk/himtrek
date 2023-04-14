import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchPackageView = createAsyncThunk(
  'events/fetchPackageView',
  async (slug) => {
    const response = await axios.get(`${BASE_URL}/packages/travel-packages/${slug}/`);
    return response.data.data;
  }
);


const PackageViewSlice = createSlice({
  name: 'packageView',
  initialState: {
    package: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackageView.pending, (state) => {})
      .addCase(fetchPackageView.fulfilled, (state, action) => {
        state.package = action.payload;
      })
      .addCase(fetchPackageView.rejected, (state, action) => {});
  }
});

export default PackageViewSlice.reducer;
