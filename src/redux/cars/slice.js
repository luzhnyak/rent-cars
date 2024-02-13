import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCarsThunk, getCarByIdThunk } from "./operations";

const carsInitialState = {
  items: [],
  currentCar: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,

  extraReducers: (builder) =>
    builder
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(getCarByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCar = action.payload;
      })
      .addMatcher(
        isAnyOf(getAllCarsThunk.pending, getCarByIdThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getAllCarsThunk.rejected, getCarByIdThunk.rejected),
        handleRejected
      ),
});

export const carsReducer = carsSlice.reducer;
