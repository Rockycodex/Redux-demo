export const getTodoList = (data) => (dispatch) => {
  dispatch({
    type: "GET_TODO_LIST",
    payload: data,
  });
};

export const setTodo = (todo) => (dispatch) => {
  dispatch({
    type: "SET_TODO",
    payload: todo,
  });
};


export const editTodo = (todo) => (dispatch) => {
  dispatch({
    type: "EDIT_TODO",
    payload: todo,
  });
};
