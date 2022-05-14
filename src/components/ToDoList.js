import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ToDo from "./ToDo";
import TO_DO_LIST from "../constants/todos";
import { List } from "@mui/material";
import { ListItemAvatar, ListItem, Avatar, ListItemText } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import EditIcon from "@mui/icons-material/Edit";
import "../App.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditTask from "./EditTask";
import { getTodoList, editTodo, deleteTodo, completeTodo } from "../actions/todoActions";

const ToDoList = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [editTodoText, setEditTodoText] = useState("");
  const [completeTodoText, setCompleteTodoText] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((res) => {
        props.getTodoList(res);
      });
  }, []);

  const handleDelete = (id) => {
    // const newToDoList = props.todoList.filter((todo) => todo.id !== id);
   
     fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    })
      .then((res) => res.json())
      .then((res) => {
        props.deleteTodo(id);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    setEditTodo(true);
    setEditTodoText(props.todoList.filter((todo) => todo.id === id)[0]);
  };

  const handleDialogClose = () => {
    setEditTodo(false);
  };

  const handleToDoSave = (todoText) => {
    const id = editTodoText.id;
    const isCompleted = editTodoText.isCompleted;
    const editedTodo = {
      text: todoText,
    };

    fetch(`http://localhost:4000/todos/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTodo), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        props.editTodo(res);
      });
    setEditTodo(false);
    setEditTodoText("");
  };

  const handleTodoComplete = (id, isCompleted) => {
    // const newTodo = todoList.filter((todo) => todo.id !== id);
    // const completedTodo = todoList.filter((todo) => todo.id === id)[0];

    // if (completedTodo.isCompleted) {
    //   completedTodo.isCompleted = false;
    //   newTodo.unshift(completedTodo);
    // } else {
    //   completedTodo.isCompleted = true;
    //   newTodo.push(completedTodo);
    // }

    fetch(`http://localhost:4000/todos/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted
      }), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        props.completeTodo(res);
        console.log(res);
      });
    
  };

  return (
    <Grid>
      {editTodo && (
        <EditTask
          editTodo={editTodo}
          editTodoText={editTodoText && editTodoText.text}
          handleDialogClose={handleDialogClose}
          handleToDoSave={handleToDoSave}
        />
      )}
      <List>
        {props.todoList.length > 0
          ? props.todoList.map((todo) => (
              <ListItem
                secondaryAction={
                  <>
                    <IconButton>
                      <DoneAllIcon
                        onClick={() => handleTodoComplete(todo.id, todo.isCompleted)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </IconButton>
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
                    <DoubleArrowIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText
                  className="container"
                  primary={<ToDo key={todo.id} data={todo}></ToDo>}
                />
              </ListItem>
            ))
          : "No data available"}
      </List>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTodoList: (todoList) => dispatch(getTodoList(todoList)),
  editTodo: (todo) => dispatch(editTodo(todo)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  completeTodo: (todo) => dispatch(completeTodo(todo)),
});

const mapStateToProps = (state) => {
  return {
    todoList: state.todos.todoList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

