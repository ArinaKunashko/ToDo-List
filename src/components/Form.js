import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Menu } from '@mui/material'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'



const Form = ({ setInputText, todos, setTodos, inputText, status, setStatus }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
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

                <FormControl variant='filled' fullWidth>
                    <InputLabel htmlFor="todo-adornment" sx={{color:'#000000', '&.Mui-focused': {color: '#000000'}}}>Add Todo</InputLabel>
                    <FilledInput
                        id="todo-adornment"
                        autoFocus
                        disableUnderline
                        type={'text'}
                        value={inputText}
                        onChange={inputTextHandler}
                        sx={[{
                            backgroundColor:'#ffffff', 
                            '&.Mui-focused': {backgroundColor: '#ffffff'},
                            '&:hover': {backgroundColor: '#ffffff'},
                        }]}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton onClick={submitTodoHandler} edge="end">
                                    <AddIcon fontSize='large' sx={10} />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>


                <Box sx={{ minWidth: 160 }}>
                    <FormControl fullWidth>
                        <Select
                            name='todos'
                            value={status}
                            onChange={statusHandler}
                            displayEmpty
                            sx={[{
                                backgroundColor:'#ffffff', 
                                '&.Mui-focused': {backgroundColor: '#ffffff'},
                                '&:hover': {backgroundColor: '#ffffff'},
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

export default Form;







// import React from 'react'
// import AddIcon from '@mui/icons-material/Add';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Menu } from '@mui/material'
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";


// const validateNewTodoText = values => {
//     const errors = {};
//     if (!values.newTodoText) {
//         errors.newTodoText = "Write something";
//     }
//     return errors;
// };
// const validateSchemaNewTodoText = Yup.object().shape({

//     newTodoText: Yup.string()
//         .min(1, "Must be longer than 2 characters")
//         .max(1000, "Must be shorter than 10 characters")
//         .required("Write something")
// });

// const FormTodo = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

//     const inputTextHandler = (e) => {
//         console.log(e.target.value)
//         setInputText(e.target.value)
//     }

//     const submitTodoHandler = (e) => {
//         e.preventDefault()
//         setTodos([
//             ...todos,
//             { text: inputText, completed: false, id: Math.random() * 1000 }
//         ]);
//         setInputText("");
//     }

//     const statusHandler = (e) => {
//         setStatus(e.target.value)
//     }


//     return (

//         <Formik
//             initialValues={{
//                 newTodoText: ""
//             }}

//             onSubmit={statusHandler}
//             validate={validateNewTodoText}
//             validationSchema={validateSchemaNewTodoText}
//         >

//             {() => (
//                 <Form >
//                     <Stack
//                         component="form"
//                         sx={{
//                             width: '25ch',
//                         }}
//                         spacing={2}
//                         noValidate
//                         autoComplete="off"
//                     >
//                         <TextField
//                             hiddenLabel
//                             id="filled-hidden-label-normal"
//                             value={inputText}
//                             variant="filled"
//                             label={'Add todo'} id="margin-normal" margin='Add todo'
//                             onChange={inputTextHandler}
//                         />
//                         <div>
//                             <ErrorMessage name="newPostText" component="span" />
//                         </div>
//                         <AddIcon onClick={submitTodoHandler} type='submit' color='warning' fontSize='large' sx={10}  >
//                         </AddIcon>
//                     </Stack>

//                     <div className="select">

//                         <Box sx={{ minWidth: 120 }} onClick={statusHandler}>


//                             <FormControl sx={{ m: 1, minWidth: 120 }} onClick={statusHandler}>
//                                 <Select
//                                     name='todos'
//                                     value='All'
//                                     onClick={statusHandler}
//                                     displayEmpty
//                                 // inputProps={{ 'aria-label': 'Without label' }}
//                                 >
//                                     <MenuItem value=''>
//                                         <em>All</em>
//                                     </MenuItem>

//                                     <MenuItem value='all'>All</MenuItem>
//                                     <MenuItem value='completed'>Completed</MenuItem>
//                                     <MenuItem value='uncompleted'>Uncompleted</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Box>
//                     </div>
//                 </Form>
//             )
//             } </Formik>


//     )

// }