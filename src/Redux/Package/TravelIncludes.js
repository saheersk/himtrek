import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

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
export const { setDos } = TravelIncludeSlice.actions;

export const useDos = ({ slug }) => {
  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/dos/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export const { setWonts } = TravelIncludeSlice.actions;

export const useWont = ({ slug }) => {
  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/wonts/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default TravelIncludeSlice.reducer;
