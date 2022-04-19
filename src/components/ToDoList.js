import React, { useState, useEffect } from 'react';
import ToDo from "./ToDo";
import TO_DO_LIST from "../constants/todos";
import { List } from '@mui/material';
import { ListItemAvatar, ListItem, Avatar, ListItemText } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';


const ToDoList = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        setTodoList(TO_DO_LIST);
    }, [])

    const handleDelete = (id) => {
        const newToDoList = todoList.filter(todo => todo.id !== id)
        setTodoList(newToDoList);
    }

    return (
        <Grid className="todoBox">
            <List>

                {todoList.length > 0 ? todoList.map(todo =>
                    <ListItem
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon onClick={() => handleDelete(todo.id)} />
                                </IconButton>
                            </>
                        }
                    >
                        <ListItemAvatar>
                            <IconButton edge="end" aria-label="edit">
                                <CheckCircleOutlineIcon />
                            </IconButton>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <ToDo key={todo.id} data={todo}></ToDo>
                            }
                        />
                    </ListItem>
                ) : 'No data available'}

            </List>
        </Grid>
    )
}

export default ToDoList;
