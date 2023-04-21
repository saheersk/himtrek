import { createSlice } from '@reduxjs/toolkit';


const travelerSlice = createSlice({
  name: 'traveler',
  initialState: {
    response: ''
  },
  reducers: {
    travelerRequest: (state) => {},
    travelerSuccess: (state, action) => {
      state.response = action.payload
    },
    travelerFailure: (state, action) => {
      state.response = action.payload
    },
  }
});

export const { travelerRequest, travelerSuccess, travelerFailure } = travelerSlice.actions;

export default travelerSlice.reducer;
