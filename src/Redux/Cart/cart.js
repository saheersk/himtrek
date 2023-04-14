import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../axiosConfig';

export const fetchCartProduct = createAsyncThunk(
  'events/fetchCartProduct',
  async (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(`${BASE_URL}/packages/cart/`, config);
    return response.data.data[0];
  }
);

export const removeFromCart = createAsyncThunk(
  'events/removeFromCart',
  async (productId, token) => {
    console.log(productId, "===id");
    console.log(token, "===token");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios.post(`${BASE_URL}/packages/cart/remove/${productId}/`, config);
    console.log(productId);
    return productId;
  }
);

const cartSlice = createSlice({
  name: 'cartProducts',
  initialState: {
    products: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProduct.pending, (state) => {})
      .addCase(fetchCartProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchCartProduct.rejected, (state, action) => {})
      .addCase(removeFromCart.pending, (state) => {})
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
        console.log(state.products);
      })
      .addCase(removeFromCart.rejected, (state, action) => {})
  }
});

export default cartSlice.reducer;
