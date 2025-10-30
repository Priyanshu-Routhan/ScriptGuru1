import Board from "../models/Board.js";
import Task from "../models/Task.js";

// Get all boards
export const getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new board
export const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    const board = await Board.create({ name });
    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all tasks for a board
export const getBoardTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ boardId: req.params.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a task under a board
export const createTaskInBoard = async (req, res) => {
  try {
    const { title, description, status, priority, assignedTo, dueDate } = req.body;
    const boardId = req.params.id;
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      assignedTo,
      dueDate,
      boardId,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
