// CreateTask.jsx
import React, { useState } from 'react';
import './CreateTask.css';
import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../../Components/MainNavbar/MainNavbar';
import InputField from '../../Components/InputField/InputField';

const CreateTask = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    assignee: '',
    status: 'To Do', // default
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((t) => ({ ...t, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("You are not logged in!");
        return;
      }

      const response = await fetch(
        "https://stemlearningshubhamshirodkar.pythonanywhere.com/api/tasks/create_tasks/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            title: task.title,
            desc: task.description, // match backend field
            assignee: task.assignee,
            status: task.status,
            due_date: task.dueDate
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Task created:", data);

      // Reset form
      setTask({
        title: '',
        description: '',
        assignee: '',
        status: 'To Do',
        dueDate: '',
      });

      // Navigate to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Failed to create task:", error);
      alert("Error creating task!");
    }
  };

  return (
    <div className="CreateTask">
      <MainNavbar />
      <div className="heading">
        <h1>Create New Task</h1>
      </div>
      
      <div className="inputfiled">
        <InputField
          task={task}
          handleChange={handleChange}
          isEditable={true}
        />
      </div>
      <div className="button">
        <button onClick={handleSubmit}>Create Task</button>
      </div>
    </div>
  );
};

export default CreateTask;
