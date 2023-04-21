import { createSlice } from '@reduxjs/toolkit';


const passwordSlice = createSlice({
  name: 'password',
  initialState: {
    response: ''
  },
  reducers: {
    passwordRequest: (state) => {},
    passwordSuccess: (state, action) => {
      state.response = action.payload
    },
    passwordFailure: (state, action) => {
      state.response = action.payload
    },
  }
});

export const { passwordRequest, passwordSuccess, passwordFailure } = passwordSlice.actions;

export default passwordSlice.reducer;
