import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from '../data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Delete a task by ID
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Add a new task
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Filter tasks based on the selected category
  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === 'All') return true;
    return task.category === selectedCategory;
  });

  return (
    <div>
      <h2>My Tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
}

export default App;