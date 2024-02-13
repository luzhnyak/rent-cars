import axios from "axios";

axios.defaults.baseURL = "";
axios.defaults.headers.common.Authorization = `Bearer `;

export const getAllCars = async () => {
  const { data } = await axios("/cars");
  return data;
};

export const getCarsById = async (id) => {
  const { data } = await axios(`/cars${id}`);
  return data;
};
