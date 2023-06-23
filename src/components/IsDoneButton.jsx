import { styled } from "styled-components";

// styled-components

const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  width: 270px;
`;

const Button = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
  & .todo-delete-button {
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid red;
    background-color: #fff;
  }
  & .todo-complete-button {
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid green;
    background-color: #fff;
  }
`;

const IsDoneButton = ({
  item,
  removeFunction,
  clickToggleButtonHandler,
  detailFunction,
}) => {
  return (
    <TodoContainer key={item.id}>
      <Button onClick={() => detailFunction(item.id)}>상세보기</Button>
      <h2>{item.title}</h2>
      <div>{item.content}</div>
      <ButtonSet>
        <button
          className="todo-delete-button button"
          onClick={() => removeFunction(item.id)}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => clickToggleButtonHandler(item.id)}
        >
          {item.isDone ? "취소" : "완료"}
        </button>
      </ButtonSet>
    </TodoContainer>
  );
};

export default IsDoneButton;
