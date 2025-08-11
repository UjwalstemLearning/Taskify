import React from 'react'
import './Dashboard.css'
import MainNavbar from '../../Components/MainNavbar/MainNavbar'
import TaskTable from '../../Components/TaskTable/TaskTable'
import {Link} from 'react-router-dom'

const Dashboard = ({tasks}) => {
  return (
    <>
    
      

       <div className="dashboard">
           <MainNavbar/>

           <div className="header">
               <h1>
                Task Dashboard
               </h1>
            
            <Link to="/createtask">
               <button className="createTask">
                New Task
               </button>
            </Link>
               
           
           
           </div>

           <div className="table">
               <TaskTable tasks={tasks}/>
           </div>
       </div>
    
    </>
  )
}

export default Dashboard