import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import uuid from "react-uuid";
import "../App.css";
import {
  addTodo,
  deleteTodo,
  toggleStatusTodo,
  getTodoById,
} from "../redux/modules/todo";
import IsDoneButton from "../components/IsDoneButton";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

// styled-components
const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

const Container = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;

const AddForm = styled.div`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const FormLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const AddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const AddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

// main
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
    <LayOut>
      <Container>
        <div>My Todo List</div>
        <div>React</div>
      </Container>
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
        <AddForm>
          <InputGroup>
            <FormLabel>제목</FormLabel>
            <AddInput value={title} onChange={titleChangeHandler}></AddInput>
            <FormLabel>내용</FormLabel>
            <AddInput
              value={content}
              onChange={contentChangeHandler}
            ></AddInput>
          </InputGroup>
          <AddButton type="submit">추가하기</AddButton>
        </AddForm>
      </form>
      <h2>Working.. 🔥 </h2>
      <ListWrapper>
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
      </ListWrapper>

      <h2>Done..! ☑️ </h2>
      <ListWrapper>
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
      </ListWrapper>
    </LayOut>
  );
};

export default Home;
