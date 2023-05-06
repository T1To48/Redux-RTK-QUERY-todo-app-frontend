import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTodoItem, editTodo } from "../features/todo/todoSlice.jsx";

import "../styles/editItem.css"

const EditTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todoId } = useParams();
  const { todoItem } = useSelector((state) => state.todo);
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSave = () => {
    const todoObj = {
      id: todoId,
      content: todoText,
    };
    dispatch(editTodo(todoObj));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getTodoItem(todoId));
  }, []);
  
  useEffect(() => {
    setTodoText(todoItem.content);
  }, [todoItem]);

  return (
    <div className="edit-todo-container">

      <input className="edit-todo-input" value={todoText} onChange={handleChange} />
      <button className="edit-todo-btn save-btn" onClick={handleSave}>save</button>
      <button className="edit-todo-btn cancel-btn" onClick={() => navigate("/")}>cancel</button>
    </div>
  );
};

export default EditTodo;
