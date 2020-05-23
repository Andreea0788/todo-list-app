import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  // We need a list of todo's

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    // 1) add whatever is in the input to the todos array
    // 2) clear the input field
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  };

  // The delete Button

  function deleteTodo(e) {
    e.preventDefault();
    let index = e.target.value;
    todos.splice(index, 1);
    setTodos([...todos]);
  }

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

        {todos.map((todo, index) => (
          <Todo
            title={todo}
            key={index}
            value={index}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
