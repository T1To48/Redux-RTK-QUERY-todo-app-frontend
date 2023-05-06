import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import TodoItem from "../components/TodoItem.jsx";

import "../styles/todoList.css"
const TodoList = () => {
  const navigate = useNavigate();
  const { todoList } = useSelector((state) => state.todo);

  return (
    <div className="todo-list-container">
      <div className="add-todo-btn-container">
        <button className="add-todo-btn" onClick={() => navigate("/add-todo")}> add todo</button>
      </div>
      <div className="todo-items-container">
        {todoList.map((todo) => (
        <TodoItem key={todo.id} todoId={todo.id} text={todo.content} />
      ))}
      </div>
      
    </div>
  );
};

export default TodoList;
    // <div>
    //   <div>
    //     <button onClick={() => navigate("/add-todo")}> add todo</button>
    //   </div>
    //   {todoList.map((todo) => (
    //     <TodoItem key={todo.id} todoId={todo.id} text={todo.content} />
    //   ))}
    // </div>