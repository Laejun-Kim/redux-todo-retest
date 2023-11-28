import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const location = useLocation();
  const todoId = location.pathname.slice(1);
  const navigate = useNavigate();
  const [targetTodo] = todos.filter((todo) => todo.id === todoId);
  const { title, contents, isDone } = targetTodo;
  console.log(targetTodo);
  console.log(todos);
  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전 화면으로
      </button>
      <p>제목 : {title}</p>
      <p>내용 : {contents}</p>
      <p>완료여부 : {isDone ? "완료" : "미완료"}</p>
    </>
  );
};

export default Detail;
