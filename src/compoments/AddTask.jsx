import React, { useState } from 'react'
import Button from './Button'

import './css/AddTask.css'


const AddTask = ({ handleTasksAddition }) => {
  const [inputData, setInputData] = useState('');

  //e uma convencaçao do react para "lidar com uma alteraçao"
  const handleInputChange = (e) => { 
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
   handleTasksAddition(inputData);
   setInputData('');
  };

  return (
    <div className='add-task-container'>
      <input
        onChange={handleInputChange}
        value={inputData} // tem que pegaar o inputData
        className='add-task-input'
        type='text'
      />
      <div className='add-task-button-container'>
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}

export default AddTask
