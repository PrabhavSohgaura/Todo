import React, { useState } from "react";
import "./Todo.css";
import TodoInput from "./TodoInput";

const Todo = () => {
  const [todo, setTodo] = useState({
    content: "",
    contentError: null,
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };

  const addTodo = () => {
    if (content === "") {
      alert("todo is empty");
      setTodo({ ...todo, contentError: "You must write something" });
      return;
    }
  };

  const { content, contentError } = todo;

  return (
    <div className="todo__container">
      <h1>Todo APP</h1>
      <div className="todo__form">
        <form action="">
          <input
            type="text"
            className="todo__input"
            name="content"
            onChange={handleChange}
          />
        </form>
        <button className="todo__button" onClick={addTodo}>
          Add
        </button>
      </div>
      {contentError && (
        <div className="todoInput__container">{contentError}</div>
      )}
    </div>
  );
};

export default Todo;
