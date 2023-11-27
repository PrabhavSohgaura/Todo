import React from "react";

const TodoInput = ({ todo }) => {
  return (
    <div className="todo__Container">
      <h1>{todo}</h1>
      <button>Delete</button>
    </div>
  );
};

export default TodoInput;
