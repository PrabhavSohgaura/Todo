import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoInput = () => {
  const dispatch = useDispatch();
  const todoInput = useSelector((state) => state.todoReducer);

  const handleTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "deleteTodo" });
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
