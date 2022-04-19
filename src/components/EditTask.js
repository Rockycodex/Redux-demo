import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";


const EditTask = (props) => {

  const { editTodo, editTodoText, handleToDoSave, handleDialogClose } = props;
  const [newTodoText, setNewTodoText] = useState(editTodoText);

  const handleEditNewTodoText = (event) => {
    const editTodoText = event.target.value;
    setNewTodoText(editTodoText);
  }

  return (
    <div>

      <Dialog open={editTodo} onClose={handleDialogClose}>
        <DialogContent>
          <TextField
            autoFocus
            onChange={handleEditNewTodoText}
            value={newTodoText}
            margin="dense"
            id="name"
            label="Enter to do"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={() => handleToDoSave(newTodoText)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default EditTask;