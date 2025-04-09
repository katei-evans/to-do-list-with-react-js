import React from "react";

const AddTaskForm = () => {
  return (
    <div class="add-task-container">
      <form id="add-task-form">
        <input
          type="text"
          id="task-input"
          placeholder="Add a new task..."
          required
        />
        <button type="submit" id="add-task-btn">
          <i class="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
