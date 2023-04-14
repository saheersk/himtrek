import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchGear = createAsyncThunk(
    'events/fetchGear',
    async (slug) => {
        const response = await axios.get(`${BASE_URL}/packages/travel-packages/gears/${slug}/`);
        return response.data.data;
    }
  );

export const addGearToCart = createAsyncThunk(
    'events/addToCart',
    async ({productId, token}) => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
      const response = await axios.post(`${BASE_URL}/packages/gear/add/${productId}/`, null, config);
      console.log(response.data.data);
      return response.data.data;
      }
      catch(error){
        console.log(error.response);
      }
    }
  );

const gearSlice = createSlice({
  name: 'gear',
  initialState: {
    gear: [],
    message: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGear.pending, (state) => {})
      .addCase(fetchGear.fulfilled, (state, action) => {
        state.gear = action.payload;
      })
      .addCase(fetchGear.rejected, (state, action) => {})
      .addCase(addGearToCart.pending, (state) => {})
      .addCase(addGearToCart.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(addGearToCart.rejected, (state, action) => {});
  }
});

export default gearSlice.reducer;
