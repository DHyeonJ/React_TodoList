import React, { useState } from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const TitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const ContentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  // 추가 버튼
  const clickAddButtonHanler = () => {
    const newTodos = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodos]);
    setTitle("");
    setContent("");
  };

  // 삭제 버튼
  const clickRemoveButtonHanler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 토글
  const clickToggleButtonHandler = (id) => {
    // map을 쓰면 아주 깔끔하게 해결됨
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    // todos를 newTodos의 값으로 바꾼다.
    setTodos(newTodos);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            className="add-input input-body"
            value={title}
            onChange={TitleChangeHandler}
          ></input>
          <label className="form-label">내용</label>
          <input
            className="add-input"
            value={content}
            onChange={ContentChangeHandler}
          ></input>
        </div>
        <button className="add-button" onClick={clickAddButtonHanler}>
          추가하기
        </button>
      </div>
      <h2 className="list-title">Working.. 🔥 </h2>
      <div className="list-wrapper">
        {todos.map(function (item) {
          if (!item.isDone) {
            return (
              <User
                key={item.id}
                item={item}
                removeFunction={clickRemoveButtonHanler}
                clickToggleButtonHandler={clickToggleButtonHandler}
              />
            );
          }
        })}
      </div>

      <h2 className="list-title">Done..! ☑️ </h2>
      <div className="list-wrapper">
        {todos.map(function (item) {
          if (item.isDone) {
            return (
              <User
                key={item.id}
                item={item}
                removeFunction={clickRemoveButtonHanler}
                clickToggleButtonHandler={clickToggleButtonHandler}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default App;
