import {
  Task,
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
} from "../models/taskModel";

export const fetchTasks = (query: string = ""): Task[] => {
  return getAllTasks().filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const createTask = (title: string): Task => {
  const newTask: Task = {
    id: getAllTasks().length,
    title,
    isDone: false,
  };
  addTask(newTask);
  return newTask;
};

export const removeTask = (id: number): boolean => {
  return deleteTask(id);
};

export const modifyTask = (id: number, isDone: boolean): boolean => {
  return updateTask(id, isDone);
};
