import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {
    itineraries: [],
  },
  reducers: {
    setItineraries: (state, action) => {
      state.itineraries = action.payload;
    },
  },
});

export const useItinerary = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/itineraries/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setItineraries(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setItineraries } = itinerarySlice.actions;

export default itinerarySlice.reducer;
