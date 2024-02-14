export const selectAllCars = (state) => state.cars.items;

export const selectLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;
