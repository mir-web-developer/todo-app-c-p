import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["kdjf", "ksdfj"]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
