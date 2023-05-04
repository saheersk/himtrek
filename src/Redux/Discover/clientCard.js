import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    review: [],
  },
  reducers: {
    setReview: (state, action) => {
      state.review = action.payload;
    },
  },
});

export const useReview = () => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/web/review/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setReview(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setReview } = reviewSlice.actions;

export default reviewSlice.reducer;
