import React from 'react'
import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import TaskCointainer from './components/TaskContainer'
import TaskCount from './components/TaskCount'

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