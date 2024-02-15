import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCars, getCarsById } from "../../services/carsApi";

// import { handleApiError } from "services/handleApiError";

export const getAllCarsThunk = createAsyncThunk(
  "cars/getAllCars",
  async (params, thunkApi) => {
    try {
      const response = await getAllCars(params);
      return response;
    } catch (error) {
      // const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getCarByIdThunk = createAsyncThunk(
  "cars/getCarById",
  async (id, thunkApi) => {
    try {
      const response = await getCarsById(id);
      return response;
    } catch (error) {
      // const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);
