import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const packageSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
  },
  reducers: {
    setPackages: (state, action) => {
      state.packages = action.payload;
    },
  },
});

export const usePackage = ({
  month = '',
  state = '',
  category = '',
  city = '',
  sort = '',
} = {}) => {
  const dispatch = useDispatch();

  console.log(category, "redux");

  const url = `${BASE_URL}/packages/travel-packages/?month=${month}&state=${state}&category=${category}&city=${city}&sort=${sort}`;
  const { data, error } = useSWR(url, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setPackages(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setPackages } = packageSlice.actions;

export default packageSlice.reducer;
