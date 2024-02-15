import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  brand: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
  },
});

export const { setBrand } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
