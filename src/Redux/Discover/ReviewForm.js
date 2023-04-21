import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "events",
  initialState: {
    response: "",
  },
  reducers: {
    reviewRequest: (state) => {},
    reviewSuccess: (state, action) => {
      state.response = action.payload;
    },
    reviewFailure: (state, action) => {
      state.response = action.payload;
    },
  },
});

export const { reviewRequest, reviewSuccess, reviewFailure } = reviewSlice.actions;

export default reviewSlice.reducer;
