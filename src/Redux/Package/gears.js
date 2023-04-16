import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchGear = createAsyncThunk(
    'gears/fetchGear',
    async (slug) => {
        const response = await axios.get(`${BASE_URL}/packages/travel-packages/gears/${slug}/`);
        return response.data.data;
    }
  );


const gearSlice = createSlice({
  name: 'gear',
  initialState: {
    gear: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGear.pending, (state) => {})
      .addCase(fetchGear.fulfilled, (state, action) => {
        state.gear = action.payload;
      })
      .addCase(fetchGear.rejected, (state, action) => {})
  }
});

export default gearSlice.reducer;
