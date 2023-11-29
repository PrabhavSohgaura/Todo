import React from "react";
import { useSelector } from "react-redux";

const TodoInput = () => {
  const todoInput = useSelector((state) => state.todoReducer);

  const handleTodo = (e) => {
    e.preventDefault();
  };
  return (
    <div className="todo__Container">
      <h1>{todoInput}</h1>
      <button type="button" onClick={handleTodo}>
        Delete
      </button>
    </div>
  );
};

export default TodoInput;
