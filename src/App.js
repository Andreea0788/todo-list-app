import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  // We need a list of todo's
  // useState

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>Andreea's todo's</h1>
          <form className="todo-input">
            <input
              className="input-box"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button
              className="submit-btn"
              disabled={!input}
              type="submit"
              onClick={handleSubmit}
            >
              + Add
            </button>
          </form>
        </div>

        {todos.map((todo) => (
          <Todo title={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
