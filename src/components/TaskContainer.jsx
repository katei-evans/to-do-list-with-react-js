import React from "react";
import { tasks } from "../data/tsks";

const TaskContainer = () => {
  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2>Your Tasks</h2>
      </div>

      <div id="tasks-list">
        {tasks.map((task) => (
          <div className="task">
            <input type="checkbox" className="checkbox" checked />
          </div>
        ))}
        {/* <!-- Tasks will be added here dynamically --> */}
      </div>
    </div>
  );
};

export default TaskContainer;
