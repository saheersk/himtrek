import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const gearSlice = createSlice({
  name: 'gear',
  initialState: {
    gear: [],
  },
  reducers: {
    setGear: (state, action) => {
      state.gear = action.payload;
    },
  },
});

export const useGear = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/gears/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setGear(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setGear } = gearSlice.actions;

export default gearSlice.reducer;
