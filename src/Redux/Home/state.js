import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

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

export default statesSlice.reducer;
