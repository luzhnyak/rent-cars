import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCarsThunk, getCarByIdThunk } from "./operations";

const carsInitialState = {
  items: [],
  page: 1,
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
  reducers: {
    incPage(state, _) {
      state.page = state.page + 1;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
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

export const { incPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
