import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';
import useSWR from 'swr';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const questionSlice = createSlice({
  name: 'questionView',
  initialState: {
    question: [],
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

export const useQuestion = ({ slug }) => {
  const dispatch = useDispatch();

  const { data, error } = useSWR(`${BASE_URL}/packages/travel-packages/question/${slug}/`, async (url) => {
    const response = await axios.get(url);
    return response.data.data;
  });

  useEffect(() => {
    if (data) {
      dispatch(setQuestion(data));
    }
  }, [data, dispatch]);

  return { data, error };
};

export const { setQuestion } = questionSlice.actions;

export default questionSlice.reducer;
