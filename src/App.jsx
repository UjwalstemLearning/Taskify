// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import CreateTask from './Pages/CreateTask/CreateTask';
import EditTask from './Pages/EditTask/EditTask';
import TaskDetails from './Pages/TaskDetails/TaskDetails';
import Authentication from './Pages/Authentication/Authentication';
import Signin from './Components/SignIn/Signin';
import Signup from './Components/Register/Signup';
import MainProfile from './Pages/EditProfile/MainProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
 const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  // Save on every change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  
const addTask = async (task) => {
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
          "Authorization": `Bearer ${accessToken}` // attach token
        },
        body: JSON.stringify(task)
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Task created:", data);

    // Optional: Update local state so UI updates instantly
    setTasks((prev) => [...prev, data.Task]);

  } catch (error) {
    console.error("Failed to create task:", error);
    alert("Error creating task!");
  }
};


  // Delete
  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  // UPDATE any field on a task
  const updateTask = (updated) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updated.id ? { ...t, ...updated } : t))
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Authentication/>}
        />
        <Route
          path="/signin"
          element={<Signin/>}
        />
        <Route
          path="/signup"
          element={<Signup/>}
        />
        <Route
           path='/editprofile'
           element={<MainProfile/>}   
        />
        <Route
          path="/dashboard"
          element={<Dashboard tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route
          path="/createtask"
          element={<CreateTask addTask={addTask} />}
        />
        <Route
          path="/edittask/:taskId"
          element={<EditTask tasks={tasks} updateTask={updateTask} />}
        />
        <Route
          path="/taskdetails/:taskId"
          element={<TaskDetails tasks={tasks} deleteTask={deleteTask} />}
        />
      </Routes>
    </Router>
  );
};

export default App;