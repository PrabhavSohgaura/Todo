import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoReducer";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
