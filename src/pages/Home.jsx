import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import "../App.css";
import uuid from "react-uuid";
import {
  addTodo,
  deleteTodo,
  toggleStatusTodo,
  getTodoById,
} from "../redux/modules/todo";
import IsDoneButton from "../components/IsDoneButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // useSelector
  const todos = useSelector((state) => {
    return state.todo.todos;
  });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  // 삭제 버튼
  const clickRemoveButtonHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  // 토글
  const clickToggleButtonHandler = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  // 상세페이지
  const clickDetailButtonHandler = (id) => {
    dispatch(getTodoById(id));
    navigate(`/detail/${id}`);
  };

  const dispatch = useDispatch();

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addTodo({
              id: uuid(),
              title,
              content,
              isDone: false,
            })
          );
          setTitle("");
          setContent("");
        }}
      >
        <div className="add-form">
          <div className="input-group">
            <label className="form-label">제목</label>
            <input
              className="add-input input-body"
              value={title}
              onChange={titleChangeHandler}
            ></input>
            <label className="form-label">내용</label>
            <input
              className="add-input"
              value={content}
              onChange={contentChangeHandler}
            ></input>
          </div>
          <button className="add-button" type="submit">
            추가하기
          </button>
        </div>
      </form>
      <h2 className="list-title">Working.. 🔥 </h2>
      <div className="list-wrapper">
        {todos.map((item) => {
          if (!item.isDone) {
            return (
              <IsDoneButton
                key={item.id}
                item={item}
                detailFunction={clickDetailButtonHandler}
                removeFunction={clickRemoveButtonHandler}
                clickToggleButtonHandler={clickToggleButtonHandler}
              />
            );
          }
        })}
      </div>

      <h2 className="list-title">Done..! ☑️ </h2>
      <div className="list-wrapper">
        {todos.map((item) => {
          if (item.isDone) {
            return (
              <IsDoneButton
                key={item.id}
                item={item}
                detailFunction={clickDetailButtonHandler}
                removeFunction={clickRemoveButtonHandler}
                clickToggleButtonHandler={clickToggleButtonHandler}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
