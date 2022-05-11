const initialState = {
  todoList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO":
      const todo = action.payload;
      return {
        todoList: [...state.todoList, todo],
      };
    case "GET_TODO_LIST":
      return {
        todoList: action.payload,
      };
    default:
      return state;
  }
};
