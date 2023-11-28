// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    contents: "내용1",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    contents: "내용2",
    isDone: false,
  },
];

const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const SWITCH_TODO = "todo/SWITCH_TODO";

//액션생성자
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      return [...state, newTodo];

    case DELETE_TODO:
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);

    case SWITCH_TODO:
      const targetId = action.payload;

      return state.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

export default todos;
