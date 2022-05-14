import { completeTodo, setTodo } from "../actions/todoActions";

const initialState = {
  todoList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO":
      const todo = action.payload;
      return {
        todoList: [...state.todoList, todo],
      };

    case "EDIT_TODO":
      const editTodo = action.payload;
      return {
        todoList: [
          ...state.todoList.map((todo) => {
            if (todo.id === editTodo.id) {
              todo.text = editTodo.text;
              todo.isCompleted = editTodo.isCompleted;
            }
            return todo;
          }),
        ],
      };
    case "GET_TODO_LIST":
      return {
        todoList: action.payload,
      };

    case "DELETE_TODO":
      const id = action.payload;
      return {
        todoList: [...state.todoList.filter((todo) => todo.id != id)],
      };

    case "COMPLETE_TODO":
      const ctodo = action.payload;
      return {
        todoList: [
          ...state.todoList.map((counter) => {
            if (counter.id === ctodo.id) {
              counter.isCompleted = ctodo.isCompleted;
            }
            return counter;
          }),
        ],
      };

    default:
      return state;
  }
};
