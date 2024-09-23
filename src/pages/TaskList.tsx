import React from "react";
import tasksData from "../../data/tasks.json";
import Task from "../components/Task";
import { TaskType } from "../../types";

const TaskList: React.FC = () => {
  const statuses = ["To Do", "In Progress", "Review"];

  return (
    <div className="taskList-container">
      <h1>Task List</h1>
      <div className="status-container">
        {statuses.map((status) => (
          <div className="status-column-wrapper" key={status}>
            <div className="status-header">
              <h2 className="list-title">{status}</h2>
            </div>
            <div className="status-column">
              {tasksData.tasks
                .filter((task) => task.status === status)
                .map((task: TaskType) => (
                  <Task key={task.id} task={task} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
