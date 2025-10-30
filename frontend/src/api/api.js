// src/api/api.js
const BASE_URL = "http://localhost:5000/api";

// Boards
export const getBoards = async () => {
  const res = await fetch(`${BASE_URL}/boards`);
  if (!res.ok) throw new Error("Failed to fetch boards");
  return res.json();
};

export const createBoard = async (board) => {
  const res = await fetch(`${BASE_URL}/boards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(board),
  });
  if (!res.ok) throw new Error("Failed to create board");
  return res.json();
};

// Tasks
export const getTasksByBoard = async (boardId) => {
  const res = await fetch(`${BASE_URL}/boards/${boardId}/tasks`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
};

export const createTask = async (boardId, task) => {
  const res = await fetch(`${BASE_URL}/boards/${boardId}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
};

export const updateTask = async (taskId, updatedTask) => {
  const res = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });
  if (!res.ok) throw new Error("Failed to update task");
  return res.json();
};

export const deleteTask = async (taskId) => {
  const res = await fetch(`${BASE_URL}/tasks/${taskId}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete task");
  return res.json();
};
