import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';

export const fetchState = createAsyncThunk(
  'states/fetchState',
  async () => {
    const response = await axios.get(`${BASE_URL}/packages/state/`);
    return response.data.data;
  }
);

const statesSlice = createSlice({
  name: 'states',
  initialState: {
    states: [],
    status: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchState.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchState.fulfilled, (state, action) => {
        state.status = false;
        state.states = action.payload;
      })
      .addCase(fetchState.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload.data;
      });
  }
});

export const { setData } = statesSlice.actions;

export const usePlace = () => {
  const { data, error } = useSWR(`${BASE_URL}/packages/state/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  return { data, error };
};

export default statesSlice.reducer;
