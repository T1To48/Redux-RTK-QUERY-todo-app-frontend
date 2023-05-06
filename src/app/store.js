import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todo/todoSlice.jsx";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
