import { Router } from "express";
import {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", addTask);
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id", updateTask);

export default router;
