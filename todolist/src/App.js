import React, { useState } from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 0, title: "", content: "", isDone: false },
  ]);

  const [doneTodo, setDoneTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const TitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const ContentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  // 추가 버튼 클릭
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

  // 완료 버튼
  const clickFinishButtonHanler = (id) => {
    const newDoneTodos = {
      id: doneTodo.length + 1,
      title,
      content,
      isDone: true,
    };
    setDoneTodo([...doneTodo, newDoneTodos]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 삭제 버튼
  const clickRemoveButtonHanler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 완료 삭제 버튼
  const doneclickRemoveButtonHanler = (id) => {
    const newDoneTodos = doneTodo.filter((todo) => todo.id !== id);
    setDoneTodo(newDoneTodos);
  };

  // 완료 취소 버튼
  const cancelFinishButtonHanler = (id) => {
    const newTodos = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodos]);
    setDoneTodo(doneTodo.filter((todo) => todo.id !== id));
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
          return (
            <User
              key={item.id}
              item={item}
              finishFunction={clickFinishButtonHanler}
              removeFunction={clickRemoveButtonHanler}
            />
          );
        })}
      </div>
      <h2 className="list-title">Done..! ☑️ </h2>
      <div className="list-wrapper">
        {doneTodo.map(function (item) {
          return (
            <User
              key={item.id}
              item={item}
              doneRemoveFunction={doneclickRemoveButtonHanler}
              cancelFunction={cancelFinishButtonHanler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
