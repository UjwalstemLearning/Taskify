import React from 'react'
import './TaskTable.css'

const TaskTable = () => {
    return (
        <>

            <div className="tasktable">
                <div className="selecter">
                    <select name="" id="">
                        <option value="" disabled selected hidden>Assignee</option>
                        <option value="Frontend">Frontend Intern</option>
                        <option value="Backend">Backend Intern</option>
                        <option value="Fullstack">Fullstack Intern</option>
                    </select>

                    <select name="" id="">
                         <option value="" disabled selected hidden>Status</option>
                        <option value="To-do">To Do</option>
                        <option value="In-progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className="dataTable">
                     <table border={1}>
                        <thead>
                            <tr>
                                <th className='task'>Task</th>
                                <th className='desc'>Description</th>
                                <th className='assi'>Assignee</th>
                                <th className='status'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Implement User Authentication</td>
                                <td>Develop secure login and registration functionality.</td>
                                <td>Frontend Intern</td>
                                <td className='flag-details'>
                                    <div className="flag">
                                        <span>To Do</span>
                                    </div>
                                </td>
                            </tr>

                             <tr>
                                <td>Set up Database Schema</td>
                                <td>Define and implement the database structure for the application.</td>
                                <td>Backend Intern</td>
                                <td className='flag-details'>
                                    <div className="flag">
                                        <span>To Do</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>

        </>
    )
}

export default TaskTable