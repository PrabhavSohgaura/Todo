import React from "react";
import { useSelector } from "react-redux";

const TodoInput = () => {
  const todoInput = useSelector((state) => state.todoReducer);
  return (
    <div className="todo__Container">
      <h1>{todoInput}</h1>
      <button>Delete</button>
    </div>
  );
};

export default TodoInput;
