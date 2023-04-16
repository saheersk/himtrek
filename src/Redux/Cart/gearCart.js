import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";

export const fetchGearCart = createAsyncThunk(
  "gears/fetchGearCart",
  async ({ token }) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      `${BASE_URL}/packages/cart/gears/`,
      config
    );
    return response.data.data;
  }
);

export const addGearToCart = createAsyncThunk(
  "gears/addToCart",
  async ({ productId, token }) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.post(
        `${BASE_URL}/packages/cart/gear/add/${productId}/`,
        null,
        config
      );
      return response.data.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const removeFromGearCart = createAsyncThunk(
  "gears/removeFromGearCart",
  async ({ productId, token }) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.delete(
      `${BASE_URL}/packages/cart/gear/remove/${productId}/`,
      config
    );
    return productId;
  }
);

export const GearItemAddOrSub = createAsyncThunk(
  "gears/GearItemAddOrSub",
  async ({ productId, token, action }) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.put(
      `${BASE_URL}/packages/cart/gear/update-day/${productId}/?days=${action}`,
      null,
      config
    );
    return productId;
  }
);

const gearCartSlice = createSlice({
  name: "gearCart",
  initialState: {
    gearCart: [],
    message: "",
    is_gear: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGearCart.pending, (state) => {})
      .addCase(fetchGearCart.fulfilled, (state, action) => {
        state.gearCart = action.payload;
        console.log(state.gearCart.length, 'gearCart');
        if (state.gearCart.length !== 0) {
          state.is_gear = true;
        }
        else {
          state.is_gear = false;
        }
      })
      .addCase(fetchGearCart.rejected, (state, action) => {})
      .addCase(addGearToCart.pending, (state) => {})
      .addCase(addGearToCart.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(addGearToCart.rejected, (state, action) => {})
      .addCase(removeFromGearCart.pending, (state) => {})
      .addCase(removeFromGearCart.fulfilled, (state, action) => {
        const productId = action.payload;
        state.gearCart = state.gearCart.filter((item) => item.id !== productId);
        console.log(state.gearCart.length, "len");
        if (state.gearCart.length === 0) {
          state.is_gear = false;
        }
      })
      .addCase(removeFromGearCart.rejected, (state, action) => {})
      .addCase(GearItemAddOrSub.pending, (state) => {})
      .addCase(GearItemAddOrSub.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(GearItemAddOrSub.rejected, (state, action) => {});
  },
});

export default gearCartSlice.reducer;
