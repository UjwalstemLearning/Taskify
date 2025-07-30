import React from 'react'
import './Dashboard.css'
import MainNavbar from '../../Components/MainNavbar/MainNavbar'
import TaskTable from '../../Components/TaskTable/TaskTable'

const Dashboard = () => {
  return (
    <>
    
      

       <div className="dashboard">
           <MainNavbar/>

           <div className="header">
               <h1>
                Task Dashboard
               </h1>

               <button className="createTask">
                New Task
               </button>
           </div>

           <div className="table">
               <TaskTable/>
           </div>
       </div>
    
    </>
  )
}

export default Dashboard