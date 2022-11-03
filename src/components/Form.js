import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import FilledInput from '@mui/material/FilledInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'


const Form = ({ setInputText, todos, setTodos, inputText, status, setStatus }) => {

    const [error, setError] = useState(false)

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if (inputText.length === 0) {
            setError(true)
            return
        }
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (

        <Box className='todo-container'>
            <Stack
                component='aside'
                sx={{
                    width: '800px',
                }}
                spacing={2}
                alignContent='center'
                alignItems='center'
                alignSelf='center'
                noValidate
                autoComplete='off'
                direction='row'
            >
                <form onSubmit={submitTodoHandler}>
                    <FormControl variant='filled' fullWidth>
                        <InputLabel htmlFor="todo-adornment" sx={{ color: '#000000', '&.Mui-focused': { color: '#000000' } }}>Add Todo</InputLabel>
                        <FilledInput
                            id="todo-adornment"
                            autoFocus
                            disableUnderline
                            type={'text'}
                            value={inputText}
                            onChange={inputTextHandler}
                            sx={[{
                                backgroundColor: '#ffffff',
                                '&.Mui-focused': { backgroundColor: '#ffffff' },
                                '&:hover': { backgroundColor: '#ffffff' },
                            }]}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton type='submit' onClick={submitTodoHandler} >
                                        <AddIcon fontSize='large' sx={10} />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>
                <Box sx={{ minWidth: 160 }}>
                    <FormControl fullWidth>
                        <Select
                            name='todos'
                            value={status}
                            onChange={statusHandler}
                            displayEmpty
                            sx={[{
                                backgroundColor: '#ffffff',
                                '&.Mui-focused': { backgroundColor: '#ffffff' },
                                '&:hover': { backgroundColor: '#ffffff' },
                            }]}
                        >
                            <MenuItem value='all'><em>All</em></MenuItem>
                            <MenuItem value='completed'>Completed</MenuItem>
                            <MenuItem value='uncompleted'>Uncompleted</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </Box>
    )
}

export default Form