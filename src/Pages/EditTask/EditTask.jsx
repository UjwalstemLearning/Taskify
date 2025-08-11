// EditTask.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditTask.css';
import InputField from '../../Components/InputField/InputField';
import MainNavbar from '../../Components/MainNavbar/MainNavbar';

const EditTask = ({ tasks, updateTask }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const original = tasks.find((t) => t.id === Number(taskId));

  const [task, setTask] = useState({ ...original });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((t) => ({ ...t, [name]: value }));
  };

  const handleSave = () => {
    updateTask(task);
    navigate('/dashboard');
  };

  return (
    <>
       
    <div className="CreateTask">
      <MainNavbar/>
      <div className="heading">
           <h1>Edit Task Details</h1>
      </div>
     
      <div className="inputfiled">
        <InputField
          task={task}
          handleChange={handleChange}
          editableFields={['status']}
        />
      </div>
      <div className="button">
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
    </>
   
  );
};

export default EditTask;