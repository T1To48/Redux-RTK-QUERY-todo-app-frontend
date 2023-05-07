import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetTodoListQuery } from "../features/api/apiSlice.jsx";
import TodoItem from "../components/TodoItem.jsx";

import "../styles/todoList.css";
const TodoListTest = () => {
  const navigate = useNavigate();
const {data: todoList,isLoading,isSuccess,isError,error}=useGetTodoListQuery()

useEffect(() => {console.log(todoList);},[todoList])

if (isLoading) return <h1>LOADING...</h1>


if (isSuccess) return (
    <div className="todo-list-container">
      <div className="add-todo-btn-container">
        <button className="add-todo-btn" onClick={() => navigate("/add-todo")}>
          
          add todo
        </button>
      </div>
      <div className="todo-items-container">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todoId={todo.id} text={todo.content} />
        ))}
      </div>
    </div>
  );
  
if(isError) return <h1>{error.toString()}</h1>
};

export default TodoListTest;
