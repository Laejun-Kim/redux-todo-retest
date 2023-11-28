import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const StCardDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #7579e7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: auto;
`;
const StBtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 50px;

  button:first-of-type {
    background-color: #7579e7;
  }
  button {
    background-color: #9ab3f5;
    color: white;
  }
  button:last-of-type {
    background-color: #a3d8f4;
    color: white;
  }
`;

function TodoCard({ todo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteBtnHndlr = () => {
    dispatch(deleteTodo(todo.id));
  };
  const toggleBtnHndlr = () => {
    dispatch(switchTodo(todo.id));
  };
  const toDetailBtnHndlr = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <StCardDiv>
      <h3>{todo.title}</h3>
      <p>{todo.contents}</p>
      <StBtnDiv>
        <button onClick={deleteBtnHndlr}>삭제</button>
        <button onClick={toggleBtnHndlr}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={toDetailBtnHndlr}>상세보기</button>
      </StBtnDiv>
    </StCardDiv>
  );
}

export default TodoCard;
