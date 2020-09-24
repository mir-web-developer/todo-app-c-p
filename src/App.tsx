import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import Todo from "./Todo";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot((snapshot) => {setTodos(snapshot.docs.map((doc) => ({id:doc.id, todo:doc.data().todo})));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>hello world🚀</h1>
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </FormControl>

      <Button
        disabled={!input}
        variant="contained"
        onClick={addTodo}
        color="primary"
      >
        Add todo
      </Button>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
