export const simpleAction = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action",
  });
};

export const setFruitOne = (fruitOne) => (dispatch) => {
  dispatch({
    type: "SET_FRUIT_ONE",
    payload: fruitOne,
  });
};

export const setFruitTwo = (fruitTwo) => (dispatch) => {
  dispatch({
    type: "SET_FRUIT_TWO",
    payload: fruitTwo,
  });
};
