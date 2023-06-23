const IsDoneButton = ({
  item,
  removeFunction,
  clickToggleButtonHandler,
  detailFunction,
}) => {
  return (
    <div key={item.id} className="todo-container">
      <button onClick={() => detailFunction(item.id)}>상세보기</button>
      <h2 className="todo-title">{item.title}</h2>
      <div>{item.content}</div>
      <div className="button-set">
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
      </div>
    </div>
  );
};

export default IsDoneButton;
