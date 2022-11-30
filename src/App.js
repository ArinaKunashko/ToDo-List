import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'
import { createTheme, Typography } from '@mui/material/'
import { ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    text: {
      white: '#efefef',
    },
  },
  // typography: {
  //   h1: {
  //     fontSize: '5rem',
  //     lineHeight: 1.06,
  //   },
  // }
})

theme.typography.h1 = {
  fontSize: '4rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setfilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setfilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

    return (
      <ThemeProvider theme={theme}>
      <div className='App'>
          <Typography align='center' variant='h1' sx={{paddingTop:'40px'}}> What's the Plan for Today?</Typography>
        <Form inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          status={status}
          setStatus={setStatus}
        />
        <ToDoList setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </div>
      </ThemeProvider>
    )
  }

  export default App
