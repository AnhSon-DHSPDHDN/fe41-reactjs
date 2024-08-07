import axios from "axios";

export const userApis = {
  getAllUsers: async () => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}users`);
    return response.data;
  },
};
