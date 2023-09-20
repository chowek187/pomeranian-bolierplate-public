import { useEffect, useState } from 'react';
import './styles.css';

export const AnimationsJS = () => {
  const [text, setText] = useState('I love react :)');
  const [isAnimated, setIsAnimated] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const toggleButton = () => {
    setIsAnimated((prev) => !prev);
  };

  useEffect(() => {
    // Tutaj logika
    if (opacity > 0) {
      const interval = setInterval(() => {
        setOpacity(opacity - 0.005);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [opacity]);
  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleButton}>{isAnimated ? 'Off' : 'On'}</button>
      <div className="animated-box" style={{ opacity: opacity }}></div>
    </div>
  );
};
