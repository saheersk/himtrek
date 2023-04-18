import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

export const fetchMembers = createAsyncThunk(
    'about/fetchMembers',
    async () => {
        const response = await axios.get(`${BASE_URL}/web/about/`);
        return response.data.data;
    }
  );

const memberSlice = createSlice({
  name: 'about',
  initialState: {
    members: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {})
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {});
  }
});

export const { setData } = memberSlice.actions;

export const useAbout = () => {
  const { data, error } = useSWR(`${BASE_URL}/web/about/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default memberSlice.reducer;
