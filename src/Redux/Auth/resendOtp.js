import { createSlice } from '@reduxjs/toolkit';


const resendSlice = createSlice({
  name: 'resend',
  initialState: {
    response: ''
  },
  reducers: {
    resendRequest: (state) => {},
    resendSuccess: (state, action) => {
      state.response = action.payload
    },
    resendFailure: (state, action) => {
      state.response = action.payload
    },
  }
});

export const { resendRequest, resendSuccess, resendFailure } = resendSlice.actions;

export default resendSlice.reducer;
