import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



const careerViewSlice = createSlice({
  name: "careerView",
  initialState: {
    careerView: "",
    requirements: [],
  },
  reducers: {
    setCareerView: (state, action) => {
      const { careerView, requirements } = action.payload;
      state.careerView = careerView;
      state.requirements = requirements;
      console.log(state.requirements, "require");
    },
  },
});

export const useCareerView = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(
    `${BASE_URL}/web/career/${slug}/`,
    async (url) => {
      const response = await axios.get(url);
      return response.data.data;
    }
  );
  useEffect(() => {
    if (data) {
      dispatch(setCareerView(data));
    }
  }, [data, dispatch]);
  
  return { data, error };
};

export const { setCareerView } = careerViewSlice.actions;

export default careerViewSlice.reducer;
