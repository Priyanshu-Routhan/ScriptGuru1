// src/components/TaskModal.jsx
import React, { useState } from "react";
import { createTask } from "../api/api";

const TaskModal = ({ boardId, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    assignedTo: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(boardId, task);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "300px" }}
      >
        <h3>Create Task</h3>
        <input name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange}></textarea>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input name="assignedTo" placeholder="Assigned To" value={task.assignedTo} onChange={handleChange} />
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
