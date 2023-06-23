import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const dataStore = useSelector((state) => state.todo.todos);
  const navigate = useNavigate();

  const prevEvent = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Working.. 🔥</h2>
      <>
        <div>
          ID : {dataStore[0].id}
          <button onClick={prevEvent}>이전으로</button>
        </div>
        <h3>{dataStore[0].title}</h3>
        <div>{dataStore[0].content}</div>
      </>
    </div>
  );
}

export default Detail;
