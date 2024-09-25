import React, { useEffect, useState } from 'react';

function Hi({name}) {
  const props = [];
  const [state, setState] = useState({
    isVisible: true
  });

  const [rating, setRating] = useState(0);

  const plus = () => {
    setRating(rating + 1);
    setState({  isVisible: !state.isVisible })
  }

  const minus = () => {
    setRating(rating - 1);
  }

  useEffect(() => {
    // Код выполнится только при первичном монтировании
    console.log('Привет! Я примонтировался');
  }, []) // Передали пустой массив вторым аргументом в хук

  useEffect(() => {
    // Код выполнится при монтировании,
    // а также при изменении isVisible
    console.log(`Состояние isVisible: ${state.isVisible}`);
  }, [
    ...props,
    JSON.stringify(state.isVisible)
  ]) // Передали «зависимость» в хук

  useEffect(() => {
    document.title = `Рейтинг: ${rating}`;
    console.log( document.title);
  })

  useEffect(() => {
    console.log(`Привет, ${name}!`)});

  return (
    <>
      <h1>Я хук <code>useEffect</code>, посмотри в консоль :)</h1>
      <button onClick={minus}>-1</button>
      <button onClick={plus}>+1</button>
    </>
  );
}

export default Hi;