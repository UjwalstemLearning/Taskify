
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './TaskDetails.css';
import MainNavbar from '../../Components/MainNavbar/MainNavbar';


const TaskDetails = ({ tasks, deleteTask }) => {
  const { taskId } = useParams(); 
  const navigate = useNavigate(); 
  // console.log('All tasks:', tasks);
 
  
  const task = tasks.find(t => t.id === Number(taskId));
  if (!task) {
    return <p>Task not found!</p>;
  }

  const handleEditClick = () => {
    navigate(`/edittask/${taskId}`); 
  };

  const handleDelete = () => {
     deleteTask(task.id)
     navigate('/dashboard')
  }

  return (
    <>
      <MainNavbar />
      <div className="task_details">
        <div className="task_details-heading">
          <div className="task_details-heading_contant">
              <div className="task_details-contant">
            <h1>Task Details</h1>
            <span>View and Manage the details of this task</span>
          </div>
          <div className="task_details-contant">
            <h2>{task.title}</h2> 
            <p className='task_details-contant-para'>{task.description}</p>
          </div>
          </div>
          

          <h6>Task Information</h6>
        </div>

        <div className="task_details-info">
          <div className="task_details-info_top">
            <div className="info">
              <h6>Assignee</h6>
              <span>{task.assignee}</span> 
            </div>
            <div className="info">
              <h6>Status</h6>
              <span>{task.status}</span> 
            </div>
          </div>

          <div className="task_details-info_bottom">
            <div className="info">
              <h6>Due Date</h6>
              <span>{task.dueDate}</span> 
            </div>
          </div>
        </div>

        <div className="task_details-bottom">

         
             <button className="edit-btn" 
                     onClick={handleEditClick}>
                   Edit Task
             </button>
          
          
           
          
              <button className="delete-btn" 
                  onClick={handleDelete}>
                    Delete Task
              </button> 
         
          
        </div>
      </div>
    </>
  );
};

export default TaskDetails;