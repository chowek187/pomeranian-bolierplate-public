import { useState } from 'react';

export const SeeOrNot = () => {
  const [isVisible, setIsVisible] = useState(true);
  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Ukryj teskt' : 'Pokaz tekst'}
      </button>
      {isVisible && <span>SeeOrNot</span>}
      {isVisible ? <p>SeeOrNot</p> : null}
    </div>
  );
};
