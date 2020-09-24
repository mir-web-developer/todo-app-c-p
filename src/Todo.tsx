import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Input
} from "@material-ui/core";
import React, { useState } from "react";
import { db } from "./firebase";

const Todo = ({ todo }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(todo.todo);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      db.collection("todos").doc(todo.id).set({
            todo:input
      },{merge:true})
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div>
          <h1>I am a model</h1>
          <Input
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <button onClick={handleClose}>Update me</button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary="Todo" secondary={todo.todo} />
        </ListItem>
        <button onClick={handleOpen}>edit</button>
        <Button onClick={(e) => db.collection("todos").doc(todo.id).delete()}>
          ❌ Delete
        </Button>
      </List>
    </>
  );
};

export default Todo;
