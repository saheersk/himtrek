import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const CategorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const useCategory = () => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/category/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setCategory(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
