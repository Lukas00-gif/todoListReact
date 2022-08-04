// esse e o item da tarefa o q e escrito
import React from 'react';

import './css/Task.css';

const Task = ({ task, handleTaskClick }) => {
    return (
        <div 
        className='task-container' 
        style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
         <div className='task-title' onClick={() => handleTaskClick(task.id)}>
            {task.title}
         </div>
        </div>
        
    )
    // return <div className='task-container'>{task.title}</div>
    
}
 
export default Task;