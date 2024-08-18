import axios from "axios";

const apiUrl = "http://localhost:5000/api/tasks";

export const fetchTasks = async (query: string = "") => {
  try {
    const response = await axios.get(apiUrl, { params: { q: query } });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const addTask = async (title: string) => {
  try {
    const response = await axios.post(apiUrl, { title });
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const deleteTask = async (id: number) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export const updateTask = async (id: number, isDone: boolean) => {
  try {
    await axios.patch(`${apiUrl}/${id}`, { isDone });
  } catch (error) {
    console.error("Error updating task:", error);
  }
};
