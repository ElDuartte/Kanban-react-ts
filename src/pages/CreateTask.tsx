import React, { useState, useEffect } from "react";
import { TaskType } from "../../types";
import {
  getTasksFromLocalStorage,
  saveTaskToLocalStorage,
} from "../../localStorageUtils";

const CreateTask: React.FC = () => {
  const [task, setTask] = useState<TaskType>({
    id: 1,
    creator: "",
    assigned: "",
    priority: "Low",
    title: "",
    project: "",
    description: "",
    status: "ToDo",
    date: new Date().toLocaleDateString(),
  });

  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: TaskType = {
      ...task,
      id: tasks.length + 1,
    };

    saveTaskToLocalStorage(newTask, tasks);
    setTasks([...tasks, newTask]);
    alert("Task saved!!");
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Creator:
          <input
            type="text"
            name="creator"
            value={task.creator}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Assigned:
          <input
            type="text"
            name="assigned"
            value={task.assigned}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Priority:
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Project:
          <input
            type="text"
            name="project"
            value={task.project}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Status:
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            required
          >
            <option value="ToDo">To Do</option>
            <option value="InProgress">In Progress</option>
            <option value="Review">Review</option>
          </select>
        </label>
        <br />

        <button type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
