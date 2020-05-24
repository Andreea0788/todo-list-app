import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./App.css";
import db from "./firebase";

function App() {
  // We need a list of todo's

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("I ran when the component loaded");

    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const handleSubmit = (e) => {
    // 1) add whatever is in the input to the todos array
    // 2) clear the input field
    e.preventDefault();

    // setTodos([...todos, input]);
    // add user input to Firebase
    db.collection("todos").add({
      title: input,
    });
    setInput("");

    // delete from Firebase
    db.collection("todos").doc("Auto-ID").delete();
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
