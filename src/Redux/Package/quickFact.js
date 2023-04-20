import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const quickFactSlice = createSlice({
  name: 'quickFactView',
  initialState: {
    quickFact: '',
  },
  reducers: {
    setQuickFact: (state, action) => {
      state.quickFact = action.payload;
    },
  },
});

export const useQuickFact = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/quick-fact/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data[0];
  });

  useEffect(() => {
    if (data) {
      dispatch(setQuickFact(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setQuickFact } = quickFactSlice.actions;

export default quickFactSlice.reducer;
