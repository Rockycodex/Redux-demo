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
    case "EDIT_TODO":
      const editTodo = action.payload;
      return {
        todoList: [...state.todoList.map(todo => {
          if(todo.id === editTodo.id) {
            return {
              id: todo.id,
              text: editTodo.text,
              isCompleted: editTodo.isCompleted
            }
          }
          return todo;
        })],
      };
    case "GET_TODO_LIST":
      return {
        todoList: action.payload,
      };
    default:
      return state;
  }
};
