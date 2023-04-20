import { createSlice } from "@reduxjs/toolkit";

const CareerFormSlice = createSlice({
  name: "careerForm",
  initialState: {
    data: "",
    message: "",
  },
  reducers: {
    careerSuccess: (state, action) => {
      state.data = action.payload;
      state.message = "";
    },
    careerFailure: (state, action) => {
      state.data = null;
      state.message = action.payload.data;
    }
  },
});

export const { careerSuccess, careerFailure } = CareerFormSlice.actions;

export default CareerFormSlice.reducer;
