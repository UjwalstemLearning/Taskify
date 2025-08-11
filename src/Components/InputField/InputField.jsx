// InputField.jsx
import React from 'react';
import './InputField.css';

const InputField = ({
  task,
  handleChange,
  isEditable = false,
  editableFields = [],
}) => {
  // If editableFields is non-empty, only those names are unlocked.
  const isFieldEditable = (name) =>
    editableFields.length > 0
      ? editableFields.includes(name)
      : isEditable;

  return (
    <div className="input">
      <div className="inputField">
        <div className="semelar tasktitle">
          <label>Task Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            disabled={!isFieldEditable('title')}
          />
        </div>

        <div className="semelar description">
          <label>Description</label>
          <textarea
            rows="4"
            name="description"
            value={task.description}
            onChange={handleChange}
            disabled={!isFieldEditable('description')}
          />
        </div>

        <div className="semelar assignee">
          <label>Assignee</label>
          <input
            type="text"
            name="assignee"
            value={task.assignee}
            onChange={handleChange}
            disabled={!isFieldEditable('assignee')}
          />
        </div>

        <div className="semelar statu">
          <label>Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            disabled={!isFieldEditable('status')}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Not Started">Not Started</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="semelar duedate">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            disabled={!isFieldEditable('dueDate')}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
