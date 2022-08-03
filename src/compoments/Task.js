// esse e o item da tarefa o q e escrito
import React from 'react';

import './css/Task.css';

const Task = ({ task }) => {
    return <div className='task-container'>{task.title}</div>
    
}
 
export default Task;