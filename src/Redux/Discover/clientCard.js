import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

export const fetchReview = createAsyncThunk(
    'events/fetchReview',
    async () => {
        const response = await axios.get(`${BASE_URL}/web/review/`);
        return response.data.data;
    }
  );

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    review: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReview.pending, (state) => {})
      .addCase(fetchReview.fulfilled, (state, action) => {
        state.review = action.payload;
      })
      .addCase(fetchReview.rejected, (state, action) => {});
  }
});

export const { setData } = reviewSlice.actions;

export const useReview = () => {
  const { data, error } = useSWR(`${BASE_URL}/web/review/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default reviewSlice.reducer;
