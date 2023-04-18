import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

export const fetchQuestion = createAsyncThunk(
    'events/fetchQuestion',
    async (slug) => {
        const response = await axios.get(`${BASE_URL}/packages/travel-packages/question/${slug}/`);
        return response.data.data;
    }
  );

const questionSlice = createSlice({
  name: 'questionView',
  initialState: {
    question: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestion.pending, (state) => {})
      .addCase(fetchQuestion.fulfilled, (state, action) => {
        state.question = action.payload;
      })
      .addCase(fetchQuestion.rejected, (state, action) => {});
  }
});

export const { setData } = questionSlice.actions;

export const useQuestion = ({ slug }) => {
  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/question/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default questionSlice.reducer;
