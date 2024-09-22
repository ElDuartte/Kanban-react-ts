import React from "react";
import tasksData from "../../data/tasks.json";
import Task from "../components/Task";
import { TaskType } from "../../types";

const TaskList: React.FC = () => {
  return (
    <div>
      <h1>Task List</h1>
      {tasksData.tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
