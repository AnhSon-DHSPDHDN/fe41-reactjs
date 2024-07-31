import axios from "axios";

export const TaskApis = {
  getAllTasks: async () => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}tasks`);
    return response.data;
  },
  createTask: async (payload) => {
    await axios.post(`${process.env.REACT_APP_BE_URL}tasks`, payload);
  },
  deleteTaskById: async (taskId) => {
    await axios.delete(`${process.env.REACT_APP_BE_URL}tasks/${taskId}`);
  },
  updateTaskById: async (taskId, payload) => {
    await axios.patch(
      `${process.env.REACT_APP_BE_URL}tasks/${taskId}`,
      payload
    );
  },
};
