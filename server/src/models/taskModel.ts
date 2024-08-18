export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

export let tasks: Task[] = [{ id: 0, title: "Create TODO list", isDone: true }];

export const getAllTasks = (): Task[] => tasks;

export const addTask = (task: Task): void => {
  tasks.push(task);
};

export const deleteTask = (id: number): boolean => {
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== id);
  return tasks.length < initialLength;
};

export const updateTask = (id: number, isDone: boolean): boolean => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].isDone = isDone;
    return true;
  }
  return false;
};
