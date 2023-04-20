import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const placeSlice = createSlice({
  name: 'states',
  initialState: {
    places: [],
  },
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const usePlace = () => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/state/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });
  useEffect(() => {
    if (data) {
      dispatch(setPlaces(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setPlaces } = placeSlice.actions;

export default placeSlice.reducer;
