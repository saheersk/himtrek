import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  },
  reducers: {
    setEvent: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const useEvent = () => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/web/upcoming-events/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setEvent(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setEvent } = eventSlice.actions;

export default eventSlice.reducer;
