import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchCareerView = createAsyncThunk(
    'events/fetchCareerView',
    async ({slug}) => {
        const response = await axios.post(`${BASE_URL}/web/career/${slug}/`);
        return response.data.data;
    }
  );

const careerViewSlice = createSlice({
  name: 'careerView',
  initialState: {
    careerView: '',
    requirements: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareerView.pending, (state) => {})
      .addCase(fetchCareerView.fulfilled, (state, action) => {
        state.careerView = action.payload;
        state.requirements = action.payload.requirements;
      })
      .addCase(fetchCareerView.rejected, (state, action) => {});
  }
});

export default careerViewSlice.reducer;
