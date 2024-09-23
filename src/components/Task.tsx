import { TaskType } from "../../types";

export default function Task({ task }: { task: TaskType }) {
  const priorityClass =
    task.priority === "High"
      ? "priority-high"
      : task.priority === "Medium"
      ? "priority-medium"
      : "priority-low";

  return (
    <div className="task-container">
      <h1>{task.title}</h1>
      <div className="tag-container">
        <a className={`priority-tag tag ${priorityClass}`}>{task.priority}</a>

        {task.assigned != "" && (
          <a className="priority-tag tag assigned">{task.assigned}</a>
        )}

        <a className="project-tag tag">{task.project}</a>
      </div>
      <p className="description__short">{task.description}</p>
    </div>
  );
}
