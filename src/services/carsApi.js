import axios from "axios";

axios.defaults.baseURL = "https://65ccb5afdd519126b83f58c1.mockapi.io/api";

export const getAllCars = async (params) => {
  // Видалення параметрів, що мають значення null
  for (var key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }

  // Створення об'єкта URLSearchParams та додавання параметрів до нього
  var searchParams = new URLSearchParams(params);

  // Отримання рядка з параметрами гет-запиту
  var queryString = searchParams.toString();

  const { data } = await axios(`/cars?limit=12&${queryString}`);

  return data;
};

export const getCarsById = async (id) => {
  const { data } = await axios(`/cars/${id}`);
  return data;
};
