import react, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import AddTask from './compoments/AddTask'
import Tasks from './compoments/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programaçao',
      completed: false
    },
    {
      id: 2,
      title: 'Ler um livro',
      completed: true
    }
  ])

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) =>{
        if (task.id === taskId) return {...task, completed: !task.completed};

        return task;
      });
      setTasks(newTasks);
  }

  const handleTasksAddition = taskTitle => {
    const newTasks = [...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <div className='container'>
      <AddTask handleTasksAddition={handleTasksAddition}/>
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
    </div>
  )
}
export default App

// digitando no input, a funçao handleInputChangevai pegar colocar no inputData
// e quando clicar no botao ele vai pegaar o inputData e mandar para o 
// handleTasksAddtion, ele vai pegar o inputData (taskTitle) vai add nas tasks
// e setar o state