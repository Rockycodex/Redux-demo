import React, { useState, useEffect } from 'react';
import ToDo from "./ToDo";
import TO_DO_LIST from "../constants/todos";
import { List } from '@mui/material';
import { ListItemAvatar, ListItem, Avatar, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import '../App.css';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditTask from './EditTask';


const ToDoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [editTodo, setEditTodo] = useState(false);
    const [editTodoText, setEditTodoText] = useState('');

    useEffect(() => {
        setTodoList(TO_DO_LIST);
    }, [])

    const handleDelete = (id) => {
        const newToDoList = todoList.filter(todo => todo.id !== id)
        setTodoList(newToDoList);
    }

    const handleEdit = (id) => {
        setEditTodo(true);
        setEditTodoText(todoList.filter(todo => todo.id === id)[0])
    }

    const handleDialogClose = () => {
        setEditTodo(false);
    };

    const handleToDoSave = (todoText) => {
        const id = editTodoText.id;
        const newTodoList = todoList.map(todo => {
            if (todo.id === id) {
                return {
                    id: id,
                    text: todoText
                }
            }
            return todo;
        });
        setTodoList(newTodoList);
        setEditTodo(false);
        setEditTodoText('');
    }
    return (
        <Grid className="container">
            {editTodo && <EditTask
                editTodo={editTodo}
                editTodoText={editTodoText.text}
                handleDialogClose={handleDialogClose}
                handleToDoSave={handleToDoSave}
            />}
            <List>

                {todoList.length > 0 ? todoList.map(todo =>
                    <ListItem
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon onClick={() => handleEdit(todo.id)} />
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