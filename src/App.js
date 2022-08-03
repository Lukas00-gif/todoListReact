import react, { useState } from 'react';

import './App.css';

import Tasks from './compoments/Tasks';

const App = () => {
  const[tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programaçao',
      completed: false,
    },
    {
      id: 2,
      title: 'Ler um livro',
      completed: true,
    },
  ])

  return (
   <div className='container'>
      <Tasks tasks={tasks}/>
   </div>
  )
} 
  export default App;