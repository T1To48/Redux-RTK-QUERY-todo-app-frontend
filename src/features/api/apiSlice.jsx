import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redux-todo-app-1usq.onrender.com/todo-storage/v1",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: () => "/",
      providesTags: ["Post"],
    }),
    getTodoItem: builder.query({
      query: (todoId) => `/${todoId}`,
      invalidatesTags: ["Post"],
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/",
        method: "POST",
        body: { content: newTodo },
      }),
      invalidatesTags: ["Post"],
    }),
    editTodo: builder.mutation({
      query: (updatedTodo) => ({
        url: `/${updatedTodo.id}`,
        method: "PUT",
        body: { content: updatedTodo.content },
      }),
      invalidatesTags: ["Post"],
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
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
