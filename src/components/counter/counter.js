import React, {useReducer} from 'react';

// начальное значение стейта
const initialState = { count: 0 };

// функция-редьюсер
// изменяет состояния в зависимости от типа переданного action
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrementClick = () => {
    // при вызове dispatch достаточно указать тип действия
    dispatch({ type: "increment" });
  };

  const handleDecrementClick = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      Count: {state.count}
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleIncrementClick}>+</button>
    </>
  );
}

export default Counter;