import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const memberSlice = createSlice({
  name: 'about',
  initialState: {
    members: [],
  },
  reducers: {
    setMembers: (state, action) => {
      state.members = action.payload;
    },
  }
});

export const useAbout = () => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/web/about/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setMembers(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setMembers } = memberSlice.actions;

export default memberSlice.reducer;
