import React, {useState} from 'react';
import GameResult from './game-result/game-result';

const Game = () => {
  const [points, setPoints] = useState(0);

  const addPoint = () => setPoints(points + 1);

  return (
    <>
      <button onClick={addPoint}>Добавить очко Гриффиндору</button>
      <GameResult points={points} />
    </>
  )
}

export default Game;