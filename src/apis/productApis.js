import axios from "axios";

export const productApis = {
  getAllProduct: async () => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}products`);
    return response.data;
  },
  getProductById: async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}products/${id}`
    );
    return response.data;
  },
};
