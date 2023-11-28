import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteTodo } from "../redux/modules/todos";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const location = useLocation();
  const todoId = location.pathname.slice(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [targetTodo] = todos.filter((todo) => todo.id === todoId);
  const { title, contents, isDone } = targetTodo;
  console.log(targetTodo);
  console.log(todos);
  const deleteBtnHndlr = () => {
    dispatch(deleteTodo(todoId));
    navigate("/");
  };
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
      <button onClick={deleteBtnHndlr}>삭제하기</button>
    </>
  );
};

export default Detail;
