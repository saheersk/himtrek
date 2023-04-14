import { createSlice } from '@reduxjs/toolkit';


const contactSlice = createSlice({
  name: 'events',
  initialState: {
    error: false,
    success: false,
    response: ''
  },
  reducers: {
    contactRequest: (state) => {
      state.error = false;
      state.success = false;
    },
    contactSuccess: (state, action) => {
            state.error = false;
            state.success = true;
            state.response = action.payload
    },
    contactFailure: (state, action) => {
      state.response = action.payload
      state.success = false;
      state.error = true;
    },
  }
});

export const { contactRequest, contactSuccess, contactFailure } = contactSlice.actions;

export default contactSlice.reducer;
