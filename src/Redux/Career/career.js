import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

export const fetchCareer = createAsyncThunk(
    'events/fetchCareer',
    async () => {
        const response = await axios.get(`${BASE_URL}/web/career/`);
        return response.data.data;
    }
  );

const careerSlice = createSlice({
  name: 'career',
  initialState: {
    career: [],
  },
  reducers: {
    setData: (state, action) => {
      state.career = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareer.pending, (state) => {})
      .addCase(fetchCareer.fulfilled, (state, action) => {
      })
      .addCase(fetchCareer.rejected, (state, action) => {});
  }
});

export const { setData } = careerSlice.actions;

export const useCareer = () => {
  const { data, error } = useSWR(`${BASE_URL}/web/career/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default careerSlice.reducer;
