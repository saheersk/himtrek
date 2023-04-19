import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const careerSlice = createSlice({
  name: 'career',
  initialState: {
    career: [],
  },
  reducers: {
    setCareer: (state, action) => {
      state.career = action.payload;
    },
  },
});

export const useCareer = () => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/web/career/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setCareer(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setCareer } = careerSlice.actions;

export default careerSlice.reducer;
