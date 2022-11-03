import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'



const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        console.log(todo)
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className='todo'>

            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}> {text} </li>
            <Stack spacing={2} direction='row'>
                <Grid item xs={11}>
                    <DoneAllIcon color='action' onClick={completeHandler} />
                    <DeleteIcon color='action' onClick={deleteHandler} />
                    <ModeEditOutlineIcon color='success' onClick={deleteHandler} />
                </Grid>
            </Stack>
        </div>
    )
}

export default Todo;