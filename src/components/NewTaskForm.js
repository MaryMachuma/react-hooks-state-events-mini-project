import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(), // Generate a unique ID
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText('');
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories
          .filter((cat) => cat !== 'All') // Exclude the "All" category
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;