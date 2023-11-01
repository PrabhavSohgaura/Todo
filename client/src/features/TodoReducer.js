import { createSlice } from "@reduxjs/toolkit";

export const todoReducer = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      {
        id: 1,
        content: "Hit the gym",
      },
    ],
  },
  reducers: {
    addToDO: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
  },
});

export const { addToDO } = todoReducer.actions;
export default todoReducer.reducer;
