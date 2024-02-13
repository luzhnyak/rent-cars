import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    loadFavoriteCars(state, action) {
      state = action.payload;
    },
    addCar(state, action) {
      state.push(action.payload);
    },
    deleteCar(state, action) {
      return state.filter((car) => car.id !== action.payload);
    },
  },
});

export const { loadFavoriteCars, addCar, deleteCar } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
