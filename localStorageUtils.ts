import { TaskType } from "./types";

export const getTasksFromLocalStorage = (): TaskType[] => {
  const tasksString = localStorage.getItem("tasks");
  if (tasksString) {
    try {
      return JSON.parse(tasksString);
    } catch (error) {
      console.error("Error parsing tasks from local storage:", error);
      return [];
    }
  }
  return [];
};

export const saveTaskToLocalStorage = (
  newTask: TaskType,
  existingTask: TaskType[],
): void => {
  const updatedTask = [...existingTask, newTask];
  localStorage.setItem("tasks", JSON.stringify(updatedTask));
};
