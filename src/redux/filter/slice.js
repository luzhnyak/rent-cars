import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  brand: null,
  price: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
  },
});

export const { setBrand, setPrice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
