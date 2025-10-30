import express from "express";
import { updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.route("/:id").put(updateTask).delete(deleteTask);

export default router;
