import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import "../App.css";

const PrevButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const DetailTitle = styled.h1`
  padding: 0px 24px;
`;

const DetailContent = styled.div`
  padding: 0px 24px;
`;

const DetailInner = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;

const DetailOuterIine = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const DetailOuter = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Body = styled.div`
  display: block;
  margin: 8px;
`;

function Detail() {
  const dataStore = useSelector((state) => state.todo.todos);
  const navigate = useNavigate();

  const prevEvent = () => {
    navigate("/");
  };

  return (
    <Body>
      <DetailOuter>
        <DetailOuterIine>
          <div>
            <DetailInner>
              <div>ID : {dataStore[0].id}</div>
              <PrevButton onClick={prevEvent}>이전으로</PrevButton>
            </DetailInner>
            <DetailTitle>{dataStore[0].title}</DetailTitle>
            <DetailContent>{dataStore[0].content}</DetailContent>
          </div>
        </DetailOuterIine>
      </DetailOuter>
    </Body>
  );
}

export default Detail;
