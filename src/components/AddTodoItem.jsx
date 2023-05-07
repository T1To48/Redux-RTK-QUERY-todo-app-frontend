import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../features/todo/todoSlice.jsx";
const AddTodoItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const updateTodoList = () => {
    dispatch(addTodo(todoText));
    navigate("/");
  };

  return (
    <div className="edit-todo-container">
      <input
        className="edit-todo-input"
        type="text"
        value={todoText}
        onChange={handleChange}
      />
      <button className="edit-todo-btn save-btn" onClick={updateTodoList}>
        save
      </button>
      <button
        className="edit-todo-btn cancel-btn"
        onClick={() => navigate("/")}
      >
        cancel
      </button>
    </div>
  );
};

export default AddTodoItem;
