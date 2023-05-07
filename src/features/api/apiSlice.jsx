import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redux-todo-app-1usq.onrender.com/todo-storage/v1",
  }),
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: () => "/",
    }),
    getTodoItem: builder.query({
      query: (todoId) => `/${todoId}`,
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/",
        method: "POST",
        body: newTodo,
      }),
    }),
    editTodo: builder.mutation({
      query: (updatedTodo) => ({
        url: `/${todoId}`,
        method: "PUT",
        body: updatedTodo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `/${todoId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodoListQuery,
  useGetTodoItemQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
