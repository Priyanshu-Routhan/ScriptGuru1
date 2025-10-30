import React from 'react';

const priorityClass = (p) => {
  if (p === 'High') return 'priority high';
  if (p === 'Medium') return 'priority medium';
  return 'priority low';
};

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="task-card">
      <div className="task-top">
        <strong>{task.title}</strong>
        <div className={priorityClass(task.priority)}>{task.priority}</div>
      </div>
      <div className="task-meta">
        <small>Assigned: {task.assignedTo || '—'}</small>
        <small>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '—'}</small>
      </div>
      <p className="task-desc">{task.description}</p>
      <div className="task-actions">
        <select value={task.status} onChange={(e)=> onStatusChange(e.target.value)}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete} className="danger">Delete</button>
      </div>
    </div>
  );
}
