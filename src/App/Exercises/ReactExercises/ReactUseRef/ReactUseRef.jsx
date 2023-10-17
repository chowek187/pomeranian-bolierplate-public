import React, { useRef } from 'react';
import './style.css';

export function ReactUseRef() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.style.backgroundColor = 'red';
    console.log('click');
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}
