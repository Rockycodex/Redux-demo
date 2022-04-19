import React from 'react';
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

const handleDelete = id => {

    const newTask = [...ToDoList];

}


const ToDoList = () => {
    return (
        <Grid className="todoBox">
            <List>

                {TO_DO_LIST.map(todo =>
                    <ListItem
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
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


                    //    <ListItem >
                    //         <div className="bgcolor">
                    //             <TaskIcon/>
                    //         <ToDo key={todo.id} data={todo}></ToDo>
                    //        <DeleteIcon onClick={handleDelete}></DeleteIcon>
                    //        </div><br/><br/>
                    //     </ListItem>
                )}

            </List>
        </Grid>
    )
}

export default ToDoList;
