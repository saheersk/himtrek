import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

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
  reducers: {
    setData: (state, action) => {
      state.categories = action.payload;
    },
  },
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

export const { setData } = statesSlice.actions;

export const useStates = () => {
  const { data, error } = useSWR(`${BASE_URL}/packages/category/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default statesSlice.reducer;
