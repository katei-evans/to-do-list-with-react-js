import React from 'react'
import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import TaskCointainer from './components/TasksContainer'
import TaskCount from './components/TasksCount'

const App = () => {
  return (
    <div className='container'>
    <Header/>
    <AddTaskForm/>
    <TaskCointainer/>
    <TaskCount/>
    </div>
  )
}

export default App