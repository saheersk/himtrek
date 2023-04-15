import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchCategory = createAsyncThunk(
  'categories/fetchCategory',
  async () => {
    const response = await axios.get(`${BASE_URL}/packages/category/`);
    return response.data.data;
  }
);

const statesSlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.error = action.payload.data;
      });
  }
});

export default statesSlice.reducer;
