import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchCareer = createAsyncThunk(
    'events/fetchCareer',
    async () => {
        const response = await axios.get(`${BASE_URL}/web/career/`);
        return response.data.data;
    }
  );

const questionSlice = createSlice({
  name: 'career',
  initialState: {
    career: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareer.pending, (state) => {})
      .addCase(fetchCareer.fulfilled, (state, action) => {
        state.career = action.payload;
      })
      .addCase(fetchCareer.rejected, (state, action) => {});
  }
});

export default questionSlice.reducer;
