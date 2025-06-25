import React, { useState, useEffect } from 'react';
import Button from './Button';
import useLocalStorage from '../utils/useLocalStorage';

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Example effect (could be analytics, etc.)
  }, []);

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    setInput('');
  };

  // Toggle task completion status
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) =>
    filter === 'All'
      ? true
      : filter === 'Active'
      ? !task.completed
      : task.completed
  );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>

      {/* Task input form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </div>
      </form>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === 'All' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('All')}
        >
          All
        </Button>
        <Button
          variant={filter === 'Active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('Active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'Completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('Completed')}
        >
          Completed
        </Button>
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4">
            No tasks found
          </li>
        ) : (
          filteredTasks.map((task, i) => (
            <li
              key={i}
              className="bg-white p-4 rounded shadow flex items-center justify-between"
            >
              <span
                onClick={() => toggleTask(i)}
                className={`flex-1 cursor-pointer ${
                  task.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {task.text}
              </span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(i)}
                aria-label="Delete task"
              >
                ❌
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Task stats */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>
          {tasks.filter((task) => !task.completed).length} tasks remaining
        </p>
      </div>
    </div>
  );
};

export default TaskManager;