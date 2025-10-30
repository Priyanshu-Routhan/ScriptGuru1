// src/components/BoardView.jsx
import React, { useState, useEffect } from "react";
import { getTasksByBoard, updateTask, deleteTask } from "../api/api";
import TaskModal from "./TaskModal";

const BoardView = ({ board }) => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadTasks = async () => {
    const data = await getTasksByBoard(board._id);
    setTasks(data);
  };

  useEffect(() => {
    if (board) loadTasks();
  }, [board]);

  const grouped = {
    "To Do": tasks.filter((t) => t.status === "To Do"),
    "In Progress": tasks.filter((t) => t.status === "In Progress"),
    Done: tasks.filter((t) => t.status === "Done"),
  };

  const handleStatusChange = async (taskId, newStatus) => {
    await updateTask(taskId, { status: newStatus });
    loadTasks();
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    loadTasks();
  };

  if (!board) return <div style={{ padding: "20px" }}>Select a board</div>;

  return (
    <div style={{ flex: 1, display: "flex", padding: "10px" }}>
      {Object.keys(grouped).map((status) => (
        <div key={status} style={{ flex: 1, margin: "0 10px" }}>
          <h3>{status}</h3>
          <div>
            {grouped[status].map((task) => (
              <div
                key={task._id}
                style={{
                  background: "#f7f7f7",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              >
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>
                  <b>Priority:</b> {task.priority}
                </p>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task._id, e.target.value)}
                >
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
                <button onClick={() => handleDelete(task._id)}>🗑️</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={() => setShowModal(true)}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
        }}
      >
        ➕ New Task
      </button>

      {showModal && <TaskModal boardId={board._id} onClose={() => { setShowModal(false); loadTasks(); }} />}
    </div>
  );
};

export default BoardView;
