import React from "react";

interface Task {
  id: number;
  title: string;
  isDone: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number, isDone: boolean) => void;
}

const TaskList: React.FC<{
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number, isDone: boolean) => void;
}> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => onToggle(task.id, task.isDone)}>
            {task.isDone ? "Mark as Not Done" : "Mark as Done"}
          </button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
