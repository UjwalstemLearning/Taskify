import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TaskTable.css';

const TaskTable = ({ tasks }) => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedStatus === '' || selectedStatus === 'All') return true; // If "All" is selected or no status selected, display all tasks
    return task.status.toLowerCase() === selectedStatus.toLowerCase();
  });

  const handleRowClick = (taskId) => {
    // Navigate to task details with the task ID
    console.log('Navigating to task ID:', taskId);
    navigate(`/taskdetails/${taskId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'To Do':
        return { backgroundColor: '#a7dff3ff' };
      case 'In Progress':
        return { backgroundColor: '#f3cf8eff' };
      case 'Pending':
        return { backgroundColor: '#f2e17fff' };
      case 'Not Started':
        return { backgroundColor: '#e15454ff' };
      case 'Completed':
        return { backgroundColor: '#7ce294ff' };
      default:
        return { backgroundColor: '#FFFFFF' };
    }
  };

  return (
    <div className="tasktable">
      <div className="selecter">
        <select defaultValue="" onChange={handleStatusChange}>
          <option value="" disabled hidden>
            Status
          </option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
          <option value="Not Started">Not Started</option>
          <option value="Completed">Completed</option>
          <option value="All">All</option>
        </select>
      </div>

      <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th className="task">Task</th>
              <th className="desc">Description</th>
              <th className="assi">Assignee</th>
              <th className="status">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr
                key={index}
                onClick={() => {
                  console.log(task);
                  handleRowClick(task.id);
                }} // Add onClick event
                style={{ cursor: 'pointer' }} // Optional: change cursor to pointer
              >
                <td className="title">{task.title}</td>
                <td className="description">{task.description}</td>
                <td className="assignee">{task.assignee}</td>
                <td className="flag-details">
                  <div className="flag" style={getStatusColor(task.status)}>
                    <span>{task.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
