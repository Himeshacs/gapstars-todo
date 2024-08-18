export interface Task {
  id: number;
  title: string;
  isDone: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number, isDone: boolean) => void;
}
