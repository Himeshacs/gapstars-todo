import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskSearch from "./components/SearchBar";
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from "./services/taskService";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks = await fetchTasks(searchQuery);
      setTasks(fetchedTasks);
    };

    getTasks();
  }, [searchQuery]);

  const handleAddTask = async (title: string) => {
    const newTask = await addTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTaskStatus = async (id: number, isDone: boolean) => {
    await updateTask(id, !isDone);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !isDone } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Task List</h1>
      <div className="input-container">
        <TaskSearch onSearch={setSearchQuery} />
        <TaskInput onAdd={handleAddTask} />
      </div>
      <div className="task-list">
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTaskStatus}
        />
      </div>
    </div>
  );
};

export default App;
