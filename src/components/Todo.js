import React, { Fragment, useState } from 'react'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import FilledInput from '@mui/material/FilledInput'
import IconButton from '@mui/material/IconButton'
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'


const Todo = ({ text, todo, todos, setTodos, }) => {

    const [editMode, setEditMode] = useState(false)
    const [updatedText, setUpdatedText] = useState('')

    const updatedTextHandler = (e) => {
        setUpdatedText(e.target.value)
    }

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

    const updateHandler = () => {
        setUpdatedText(text)
        setEditMode(true)
    }

    const saveHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, text: updatedText
                }
            }
            return item
        }))
        setEditMode(false)
    }

    return (
        <div className='todo'>
            {editMode &&
                <>
                    <FormControl variant='filled' fullWidth>
                        <InputLabel htmlFor="todo-adornment"
                            sx={{ color: '#000000', '&.Mui-focused': { color: '#000000' } }}>
                            Update Todo
                        </InputLabel>
                        <FilledInput
                            id="todo-adornment"
                            autoFocus
                            disableUnderline
                            size='small'
                            type='text'
                            value={updatedText}
                            onChange={updatedTextHandler}
                            multiline
                            maxRows={7}
                            sx={[{
                                backgroundColor: '#ffffff',
                                '&.Mui-focused': { backgroundColor: '#ffffff' },
                                '&:hover': { backgroundColor: '#ffffff' },
                            }]}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton onClick={saveHandler} type='submit' size='medium' color='success' edge='start'>
                                        <FileDownloadDoneIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </>
            }
            {!editMode &&
                <>
                    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}> {text} </li>
                    <Stack spacing={2} direction='row'>
                        <Grid item xs={12} md={12} >
                            <IconButton onClick={completeHandler} size='medium' >
                                <DoneAllIcon color='success' />
                            </IconButton>
                            <IconButton onClick={deleteHandler} size='medium' >
                                <DeleteIcon color='action' />
                            </IconButton>
                            <IconButton onClick={updateHandler} size='medium' >
                                <ModeEditOutlineIcon sx={{ color: '#000000' }} />
                            </IconButton>
                        </Grid>
                    </Stack>
                </>
            }
        </div>
    )
}

export default Todo
