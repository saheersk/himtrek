import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: (() => {
      try {
        return JSON.parse(localStorage.getItem('user_data')) || null;
      } catch {
        return null;
      }
    })(),
    message: "",
    is_LoggedIn: localStorage.getItem('user_data') ? true : false,
    phone: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.is_LoggedIn = true
      state.data = action.payload;
      state.message = '';
      localStorage.setItem('user_data', JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      state.is_LoggedIn = false
      state.data = null;
      state.message = action.payload.data;
      state.phone = action.payload.contact_number;
    },
    clearMessage: (state) => {
      state.is_LoggedIn = false
      state.message = '';
    },
    logoutUser: (state) => {
      state.is_LoggedIn = false
      state.data = null;
      state.message = '';
      localStorage.removeItem('user_data');
    },
  },
});

export const { loginSuccess, loginFailure, clearMessage, logoutUser } = userSlice.actions;

export default userSlice.reducer;
