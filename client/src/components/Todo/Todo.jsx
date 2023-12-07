import { useState } from "react";
import "./Todo.css";
import { useDispatch } from "react-redux";
import { addToDO } from "../../features/TodoReducer";
import TodoInput from "./TodoInput";

const Todo = () => {
  const [todo, setTodo] = useState({
    content: "",
    contentError: null,
  });

  const dispatch = useDispatch();

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
      setTodo({ ...todo, contentError: "Todo input is empty!" });
      return;
    }
    dispatch(addToDO({ newContent: content }));
    setTodo({ content: "" });
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
      <TodoInput />
    </div>
  );
};

export default Todo;
