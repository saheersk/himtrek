import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";

export const fetchCartProduct = createAsyncThunk(
  "events/fetchCartProduct",
  async (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(`${BASE_URL}/packages/cart/`, config);
    return response.data.data[0];
  }
);

export const removeFromCart = createAsyncThunk(
  "events/removeFromCart",
  async ({ productId, token }) => {

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.delete(
      `${BASE_URL}/packages/cart/remove/${productId}/`,
      config
    );
    return productId;
  }
);

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: {
    products: "",
    package_price_per_person: 0,
    is_Products: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProduct.pending, (state) => {})
      .addCase(fetchCartProduct.fulfilled, (state, action) => {
        if (action.payload !== undefined) {
          state.products = action.payload;
          state.package_price_per_person = action.payload.package.price
          state.is_Products = true;
        }
        else {
          state.is_Products = false;
        }
      })
      .addCase(fetchCartProduct.rejected, (state, action) => {})
      .addCase(removeFromCart.pending, (state) => {})
      .addCase(removeFromCart.fulfilled, (state, action) => {
        if (state.products.id === action.payload) {
          state.products = "";
          state.is_Products = false;
        }
      })
      .addCase(removeFromCart.rejected, (state, action) => {});
  },
});

export default cartSlice.reducer;
