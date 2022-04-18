import React from 'react';
import ToDo from "./ToDo";
import TO_DO_LIST from "../constants/todos";
import Box from '@mui/material/Box';

const ToDoList = () => {
    return (
        <>
        <Box>
            {TO_DO_LIST.map(todo => 
            <ToDo  key={todo.id} data={todo}></ToDo>)}
            </Box>
        </>
    )
}

export default ToDoList;