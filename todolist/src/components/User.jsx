const User = ({ item, removeFunction, clickToggleButtonHandler }) => {
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
          onClick={() => clickToggleButtonHandler(item.id)}
        >
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default User;
