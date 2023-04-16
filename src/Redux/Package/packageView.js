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

export const addToCart = createAsyncThunk(
  'events/addToCart',
  async ({slug, token}) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
    const response = await axios.post(`${BASE_URL}/packages/cart/add/${slug}/`, null, config);
    console.log(response.data.data, "res");
    return response.data.data;
    }
    catch(error){
      console.log(error.response, "error");
      return error.response.status
    }
  }
);

const PackageViewSlice = createSlice({
  name: 'packageView',
  initialState: {
    package: '',
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackageView.pending, (state) => {})
      .addCase(fetchPackageView.fulfilled, (state, action) => {
        state.package = action.payload;
      })
      .addCase(fetchPackageView.rejected, (state, action) => {})
      .addCase(addToCart.pending, (state) => {})
      .addCase(addToCart.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {})
  }
});

export default PackageViewSlice.reducer;
