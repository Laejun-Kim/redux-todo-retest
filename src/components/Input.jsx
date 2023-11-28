import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const StInputForm = styled.form`
  height: 150px;
  border: 1px solid #7579e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #9ab3f5;
  gap: 15px;
`;

function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleChangeHndlr = (event) => {
    setTitle(event.target.value.trimStart());
  };
  const contentChangeHndlr = (event) => {
    setContent(event.target.value);
  };
  const registerBtnHndlr = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      contents: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <StInputForm onSubmit={registerBtnHndlr}>
      <div>
        <label htmlFor="title-input"> 제목 입력</label>
        <input
          value={title}
          onChange={titleChangeHndlr}
          id="title-input"
          required
          autoComplete="off"
          placeholder="제목을 입력하세요"
        />
      </div>

      <div>
        <label htmlFor="content-input"> 내용 입력</label>
        <input
          value={content}
          onChange={contentChangeHndlr}
          autoComplete="off"
          id="content-input"
          placeholder="내용을 입력하세요"
        />
      </div>

      <button type="submit">등록하기</button>
    </StInputForm>
  );
}

export default Input;
