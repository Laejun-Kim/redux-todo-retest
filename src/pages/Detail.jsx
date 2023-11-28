import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteTodo } from "../redux/modules/todos";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "삭제하시겠습니까?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "삭제",
      denyButtonText: `취소`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(todoId));
        navigate("/");
      } else if (result.isDenied) {
        return;
      }
    });
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
