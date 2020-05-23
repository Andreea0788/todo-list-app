import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <h3>{props.title}</h3>
      <button
        className="delete-btn"
        value={props.value}
        onClick={props.deleteTodo}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
