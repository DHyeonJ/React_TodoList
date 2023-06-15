const User = ({
  item,
  removeFunction,
  doneRemoveFunction,
  finishFunction,
  cancelFunction,
}) => {
  if (item.isDone === false)
    return (
      <div key={item.id} className="todo-container">
        <h2 className="todo-title">{item.title}</h2>
        <div>{item.content}</div>
        <div className="button-set">
          <button
            className="todo-delete-button button"
            onClick={() => removeFunction(item.id)}
          >
            삭제하기
          </button>
          <button
            className="todo-complete-button button"
            onClick={() => finishFunction(item.id)}
          >
            완료
          </button>
        </div>
      </div>
    );
  return (
    <div key={item.id} className="todo-container">
      <h2 className="todo-title">{item.title}</h2>
      <div>{item.content}</div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => doneRemoveFunction(item.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => cancelFunction(item.id)}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default User;
