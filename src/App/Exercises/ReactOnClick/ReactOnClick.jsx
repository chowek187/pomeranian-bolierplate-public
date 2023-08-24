import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  // const [isClicked, setIsClicked] = useState(false);

  // const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Cześć!</h1>
      <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}> Naciśnij mnie </button>
    </div>
  );
};
