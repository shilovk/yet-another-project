import React, {useRef, useEffect} from 'react';

function GameResult({points}) {

  const prevPointsRef = useRef();

  useEffect(() => {
    prevPointsRef.current = points;
  });

  const prevPoints = prevPointsRef.current;

  return <h1>Новый рекорд: {points}, Предыдущий рекорд: {prevPoints}</h1>;
}

export default GameResult;
