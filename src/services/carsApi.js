import axios from "axios";

axios.defaults.baseURL = "https://65ccb5afdd519126b83f58c1.mockapi.io/api";

export const getAllCars = async (page = 1, limit = 12) => {
  const { data } = await axios(`/cars?page=${page}&limit=${limit}`);
  return data;
};

export const getCarsById = async (id) => {
  const { data } = await axios(`/cars/${id}`);
  return data;
};
