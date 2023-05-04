import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



const TravelIncludeSlice = createSlice({
  name: 'TravelDosAndWonts',
  initialState: {
    dos: [],
    wonts: [],
  },
  reducers: {
    setDos: (state, action) => {
      state.dos = action.payload;
    },
    setWonts: (state, action) => {
      state.wonts = action.payload;
    },
  },
});

export const useDos = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/dos/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });
  useEffect(() => {
    if (data) {
      dispatch(setDos(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const useWont = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/wonts/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });
  useEffect(() => {
    if (data) {
      dispatch(setWonts(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setDos } = TravelIncludeSlice.actions;
export const { setWonts } = TravelIncludeSlice.actions;


export default TravelIncludeSlice.reducer;
