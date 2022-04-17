import React from 'react';
import ToDo from "./ToDo";
import TO_DO_LIST from "../constants/todos";

const ToDoList = () => {
    return (
        <>
            {TO_DO_LIST.map(todo => <ToDo data={todo}></ToDo>)}
        </>
    )
}

export default ToDoList;