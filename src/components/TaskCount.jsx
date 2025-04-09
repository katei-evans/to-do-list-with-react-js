import { tasks } from "../data/tsks";

const TaskCount = () => {
  return (
    <div className="task-stats">
      <p>
        <span id="tasks-count">
            {
                tasks.filter(task => !task.completed).length
            }
        </span> tasks left
      </p>
    </div>
  );
};

export default TaskCount;
