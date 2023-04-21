import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const PackageViewSlice = createSlice({
  name: 'packageView',
  initialState: {
    package: '',
    message: '',
  },
  reducers: {
    setPackageView: (state, action) => {
      state.package = action.payload;
    },
  },
});

export const usePackageView = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setPackageView(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setPackageView } = PackageViewSlice.actions;

export default PackageViewSlice.reducer;
