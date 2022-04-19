import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import TO_DO_LIST from '../constants/todos';


export default function CreateNewToDo() {
    const [todoText, setTodoText] = useState('');

    const handleNewToDo = () => {
        TO_DO_LIST.push({
            id: TO_DO_LIST.length + 1,
            text: todoText
        });
        setTodoText('');
    }

    const handleToDoTextChange = (event) => {
        const text = event.target.value;
        setTodoText(text);
    }

    return (
        <Box>
            <h3>Create new task</h3>
            <TextField onChange={handleToDoTextChange} value={todoText} id="outlined-basic" label="Enter the task.." variant="outlined" />
            <br />
            <br />
            <Button onClick={handleNewToDo} variant="contained">Save</Button>
        </Box>
    );
}
