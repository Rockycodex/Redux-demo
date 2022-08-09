import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import TO_DO_LIST from "../constants/todos";
import { setTodo } from "../actions/todoActions";
import { connect } from "react-redux";

function CreateNewToDo(props) {
  const [todoText, setTodoText] = useState("");

  const handleNewToDo = (event) => {
    fetch(`http://localhost:4000/todos`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: todoText,
      }), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        props.setTodo(res);
      });
    setTodoText("");
  };

  const handleToDoTextChange = (event) => {
    const text = event.target.value;
    setTodoText(text);
  };

  return (
    <Box>
      <h3>Create new task</h3>
      <TextField
        onChange={handleToDoTextChange}
        value={todoText}
        id="outlined-basic"
        label="Enter the task.."
        variant="outlined"
        required
      />
      <br />
      <br />
      <Button disabled={!todoText} onClick={handleNewToDo} variant="contained">
        Save
      </Button>
    </Box>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   setTodo: (todo) => dispatch(setTodo(todo)),
// });

export default CreateNewToDo;
