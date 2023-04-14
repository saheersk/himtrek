import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchItinerary = createAsyncThunk(
    'events/fetchItinerary',
    async (slug) => {
        const response = await axios.get(`${BASE_URL}/packages/travel-packages/itineraries/${slug}/`);
        return response.data.data;
    }
  );

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {
    itineraries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItinerary.pending, (state) => {})
      .addCase(fetchItinerary.fulfilled, (state, action) => {
        state.itineraries = action.payload;
      })
      .addCase(fetchItinerary.rejected, (state, action) => {});
  }
});

export default itinerarySlice.reducer;
