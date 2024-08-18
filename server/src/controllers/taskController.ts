import { Request, Response } from "express";
import {
  fetchTasks,
  createTask,
  removeTask,
  modifyTask,
} from "../services/taskService";

export const getTasks = (req: Request, res: Response): void => {
  const query = req.query.q as string;
  const tasks = fetchTasks(query);
  res.json(tasks);
};

export const addTask = (req: Request, res: Response): void => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ error: "Title is required" });
    return;
  }
  const newTask = createTask(title);
  res.status(201).json(newTask);
};

export const deleteTask = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const success = removeTask(id);
  if (success) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

export const updateTask = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { isDone } = req.body;
  const success = modifyTask(id, isDone);
  if (success) {
    res.status(200).end();
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};
