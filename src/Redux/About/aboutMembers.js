import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

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

export default memberSlice.reducer;
