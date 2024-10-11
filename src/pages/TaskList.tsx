import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import { TaskType } from "../../types";
import { getTasksFromLocalStorage } from "../../localStorageUtils";

const TaskList: React.FC = () => {
  const statuses = {
    ToDo: "To Do",
    InProgress: "In Progress",
    Review: "Review",
  };

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading tasks....</div>;
  }

  return (
    <div className="taskList-container">
      <h1>Task List</h1>
      <div className="status-container">
        {Object.values(statuses).map((status, index) => (
          <div className="status-column-wrapper" key={status}>
            <div className="status-header">
              <h2 className="list-title">{status}</h2>
            </div>
            <div className="status-column">
              {tasks
                .filter((task) => task.status === Object.keys(statuses)[index])
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
