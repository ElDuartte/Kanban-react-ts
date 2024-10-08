import React from "react";
import { TaskType } from "../../types";

interface TaskProps {
  tasks: TaskType;
  onAddTask: (newTask: TaskType) => void;
  onUpdateTask: (id: number, updatedFields: Partial<TaskType>) => void;
  onDeleteTask: (id: number) => void;
}

function TaskManager React.FC<TaskProps> = ({ tasks, onAddTask, onUpdateTask, onDeleteTask }) => {
  return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title} - {task.assigned} - {task.priority}</span>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
  )
}

export default TaskManager;