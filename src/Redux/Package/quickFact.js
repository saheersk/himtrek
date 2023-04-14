import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchQuickFact = createAsyncThunk(
  'events/fetchQuickFact',
  async (slug) => {
    const response = await axios.get(`${BASE_URL}/packages/travel-packages/quick-fact/${slug}/`);
    return response.data.data[0];
  }
);


const quickFactSlice = createSlice({
  name: 'quickFactView',
  initialState: {
    quickFact: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuickFact.pending, (state) => {})
      .addCase(fetchQuickFact.fulfilled, (state, action) => {
        state.quickFact = action.payload;
      })
      .addCase(fetchQuickFact.rejected, (state, action) => {});
  }
});

export default quickFactSlice.reducer;
