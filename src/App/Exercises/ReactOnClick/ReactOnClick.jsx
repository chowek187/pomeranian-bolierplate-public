import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  const [value, setValue] = useState(5);

  function handleClick() {
    setValue(value - 1);
  }
  if (value !== 0) {
    setValue('Odliacznie zakończone');
  }
  return (
    <div>
      <p>Czesc</p>
      <button onClick={handleClick}>{value}</button>
      <span>Odliczanie zakończone</span>
    </div>
  );
};
