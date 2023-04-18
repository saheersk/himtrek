import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

export const fetchEvent = createAsyncThunk(
  'events/fetchEvent',
  async () => {
    const response = await axios.get(`${BASE_URL}/web/upcoming-events/`);
    return response.data.data;
  }
);

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvent.pending, (state) => {})
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(fetchEvent.rejected, (state, action) => {});
  }
});

export const { setData } = eventSlice.actions;

export const useEvent = () => {
  const { data, error } = useSWR(`${BASE_URL}/web/upcoming-events/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};


export default eventSlice.reducer;
