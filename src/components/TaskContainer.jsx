import { tasks } from "../data/tsks";

const TaskContainer = () => {
  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2>Your Tasks</h2>
      </div>

      <div id="tasks-list">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <input
              type="checkbox"
              className="checkbox"
              checked={task.completed}
            />

            <span>{task.title}</span>

            <button className="delete-button">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
        {/* <!-- Tasks will be added here dynamically --> */}
      </div>
    </div>
  );
};

export default TaskContainer;
