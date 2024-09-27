import React, {useState} from 'react';

function ComponentWithError() {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      // В этом случае в хэндлере точно возникнет ошибка
      throw new Error("Simple error");
    } catch (err) {
      // Обычно ошибки логируются или обрабатываются дополнительной логикой,
      // но для наглядности мы просто кладём ошибку в стейт
      setError(err.message);
    }
  };

  return (
    <>
      <h1>{error}</h1>
      <button onClick={handleClick}>Make a mistake</button>
    </>
  );
}

export default ComponentWithError;