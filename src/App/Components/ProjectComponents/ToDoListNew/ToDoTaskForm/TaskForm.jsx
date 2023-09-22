import React from 'react';
import './TaskForm.css';

function TaskForm({
  task,
  formText,
  errorMessage,
  handleSubmit,
  handleChange,
}) {
  const maxTitleLength = 30;
  const maxDescriptionLength = 100;

  const handleTitleChange = (e) => {
    const newValue = e.target.value.slice(0, maxTitleLength);
    handleChange('task', newValue);
  };

  const handleDescriptionChange = (e) => {
    const newValue = e.target.value.slice(0, maxDescriptionLength);
    handleChange('formText', newValue);
  };

  return (
    <div className="todo__form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="todo__task-wrapper">
          <label className="todo__task-field">Title </label>
          <input
            className="todo__task-input"
            type="text"
            placeholder="Max 30 chars."
            value={task}
            onChange={handleTitleChange}
          />
        </div>
        <div className="todo__content-wrapper">

          <label className="todo__content-field">Description </label>
          <input
            className="todo__content-input"
            type="text"
            placeholder="Max 100 chars."
            value={formText}
            onChange={handleDescriptionChange}
          />
          {errorMessage && <p className="todo__error-message">{errorMessage}</p>}
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
