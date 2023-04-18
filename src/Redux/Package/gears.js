import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

export const fetchGear = createAsyncThunk(
    'gears/fetchGear',
    async (slug) => {
        const response = await axios.get(`${BASE_URL}/packages/travel-packages/gears/${slug}/`);
        return response.data.data;
    }
  );

const gearSlice = createSlice({
  name: 'gear',
  initialState: {
    gear: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGear.pending, (state) => {})
      .addCase(fetchGear.fulfilled, (state, action) => {
        state.gear = action.payload;
      })
      .addCase(fetchGear.rejected, (state, action) => {})
  }
});

export const { setData } = gearSlice.actions;

export const useGear = ({ slug }) => {
  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/gears/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default gearSlice.reducer;
