import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../services/reducers/counter_reducer'; // Ваши экшены

export const CounterReducer = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.value); // Доступ к состоянию

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Увеличить на 10</button>
    </div>
  );
};

export default CounterReducer;