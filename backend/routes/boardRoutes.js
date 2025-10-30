import express from "express";
import {
  getBoards,
  createBoard,
  getBoardTasks,
  createTaskInBoard,
} from "../controllers/boardController.js";

const router = express.Router();

router.route("/").get(getBoards).post(createBoard);
router.route("/:id/tasks").get(getBoardTasks).post(createTaskInBoard);

export default router;
