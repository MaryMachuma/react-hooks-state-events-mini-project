import React from 'react';

function Task({ task, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div>
      <span>{task.text}</span> - <span>{task.category}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;