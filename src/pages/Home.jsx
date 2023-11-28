import React from "react";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import TodoCard from "../components/TodoCard";
import styled from "styled-components";

const StTodosSection = styled.section`
  display: flex;
  gap: 10px;
  margin: 20px 5px;
`;

const Home = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const doneTodos = todos.filter((todo) => todo.isDone == true);
  const undoneTodos = todos.filter((todo) => todo.isDone == false);

  return (
    <>
      <Input />
      <StTodosSection>
        <p>진행중인 항목!!</p>
        {undoneTodos.map((item) => {
          return <TodoCard key={item.id} todo={item} />;
        })}
      </StTodosSection>
      <StTodosSection>
        <p>완료된 항목!!</p>
        {doneTodos.map((item) => {
          return <TodoCard key={item.id} todo={item} />;
        })}
      </StTodosSection>
    </>
  );
};

export default Home;
