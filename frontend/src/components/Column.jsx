import React from 'react';
import TaskCard from './TaskCard';

export default function Column({ title, tasks, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="column">
      <h3>{title} <span className="count">({tasks.length})</span></h3>
      <div className="tasks">
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} onEdit={() => onEdit(task)} onDelete={() => onDelete(task._id)} onStatusChange={(s)=>onStatusChange(task,s)} />
        ))}
      </div>
    </div>
  );
}
