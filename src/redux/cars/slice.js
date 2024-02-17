import { createSlice } from "@reduxjs/toolkit";
import { getAllCarsThunk } from "./operations";

const carsInitialState = {
  items: [],
  page: 1,
  brand: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    resetPage(state, _) {
      state.page = 1;
      state.items = [];
    },
    incPage(state, _) {
      state.page = state.page + 1;
    },
    resetCars(state, _) {
      state.page = 1;
      state.items = [];
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(getAllCarsThunk.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { resetPage, incPage, resetCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
