// src/components/BoardView.jsx
import React, { useState, useEffect } from "react";
import { getTasksByBoard, updateTask, deleteTask } from "../api/api";
import TaskModal from "./TaskModal";
import "../styles.css"; // Make sure your styles are loaded

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

  if (!board) return <div className="no-board">Select a board</div>;

  return (
    <div className="board-view">
      {Object.keys(grouped).map((status) => (
        <div key={status} className="board-column">
          <h3 className="board-column-title">{status}</h3>

          <div className="task-list">
            {grouped[status].map((task) => (
              <div key={task._id} className="task-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>
                  <b>Priority:</b> {task.priority}
                </p>

                <div className="task-actions">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleStatusChange(task._id, e.target.value)
                    }
                    className="task-select"
                  >
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                  </select>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(task._id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)}
      >
        ➕ New Task
      </button>

      {showModal && (
        <TaskModal
          boardId={board._id}
          onClose={() => {
            setShowModal(false);
            loadTasks();
          }}
        />
      )}
    </div>
  );
};

export default BoardView;
