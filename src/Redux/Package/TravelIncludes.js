import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchTravelDos = createAsyncThunk(
    'events/fetchTravelDos',
    async (slug) => {
        const response = await axios.get(`${BASE_URL}/packages/travel-packages/dos/${slug}/`);
        return response.data.data;
    }
  );

  export const fetchTravelWonts = createAsyncThunk(
    'events/fetchTravelWonts',
    async (slug) => {
        const response = await axios.get(`${BASE_URL}/packages/travel-packages/wonts/${slug}/`);
        return response.data.data;
    }
  );

const TravelIncludeSlice = createSlice({
  name: 'TravelDosAndWonts',
  initialState: {
    dos: [],
    wonts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTravelDos.pending, (state) => {})
      .addCase(fetchTravelDos.fulfilled, (state, action) => {
        state.dos = action.payload;
      })
      .addCase(fetchTravelDos.rejected, (state, action) => {})
      .addCase(fetchTravelWonts.pending, (state) => {})
      .addCase(fetchTravelWonts.fulfilled, (state, action) => {
        state.wonts = action.payload;
      })
      .addCase(fetchTravelWonts.rejected, (state, action) => {});
  }
});

export default TravelIncludeSlice.reducer;
