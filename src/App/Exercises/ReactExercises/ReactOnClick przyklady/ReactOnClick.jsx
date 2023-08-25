import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  function handleClick() {
    setValue('');
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleClick}>Resetuj</button>
      <input type="text" value={value} onChange={handleChange} />
      {/* <p>Naciśnięto {count} razy</p>*/}
      {/* <button onClick={() => setCount(count + 1)}> Naciśnij mnie </button>*/}
    </div>
  );
};
