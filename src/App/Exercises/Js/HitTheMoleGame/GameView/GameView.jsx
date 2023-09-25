import './GameView.css';
import { MoleIcon } from '../Mole/Mole';
import { useEffect, useState } from 'react';

const InitialMap = [
  { id: 1, isMolePresent: false, isClicked: false },
  { id: 2, isMolePresent: false, isClicked: false },
  { id: 3, isMolePresent: false, isClicked: false },
  { id: 4, isMolePresent: false, isClicked: false },
  { id: 5, isMolePresent: false, isClicked: false },
  { id: 6, isMolePresent: false, isClicked: false },
  { id: 7, isMolePresent: false, isClicked: false },
  { id: 8, isMolePresent: false, isClicked: false },
  { id: 9, isMolePresent: false, isClicked: false },
  { id: 10, isMolePresent: false, isClicked: false },
];
export default function useCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);
  function start(seconds) {
    setSecondsLeft(seconds);
    return { secondsLeft, start };
  }
  return { start, secondsLeft };
}

export const GameView = () => {
  const [score, setScore] = useState(0);
  const [krecikMap, setKrecikMap] = useState(InitialMap);
  const { start, secondsLeft } = useCountdown();
  useEffect(() => {
    start(60);
    const interval = setInterval(() => {
      const placeOfMole = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      setKrecikMap(
        krecikMap.map((field, index) => {
          if (index === placeOfMole - 1) {
            return { ...field, isMolePresent: true };
          } else {
            return field;
          }
        })
      );
    }, 1000);
  }, []);

  const renderField = () => {
    return krecikMap.map((item, index) => {
      let className;
      if (item.isClicked) {
        if (item.isMolePresent) {
          className = 'green-box';
        } else className = 'red-box';
      }

      return (
        <div
          key={index}
          onClick={() => handleMoleClick(item)}
          className={'square-box ' + className}
        >
          {item.isMolePresent && <MoleIcon />}
        </div>
      );
    });
  };
  //const [score, setScore] = useState(0);
  function handleMoleClick(item) {
    if (item.isMolePresent) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    setKrecikMap(
      krecikMap.map((field) => {
        return { ...field, isClicked: field.id === item.id };
      })
    );
  }

  return (
    <>
      <h1>KRET</h1>
      <p>
        Gra polegająca na podąaniu za krecikiem i trafieniu na kwadrat, w którym
        się pojawił.
      </p>
      <div className="game-view">
        <div className="margin-game">
          <p>CZAS DO KOŃCA</p>

          <p>WYNIK</p>

          <p>PRZYCISKI STERUJACE</p>
        </div>
        <div className="grey-area">
          <div className="grey-button">{secondsLeft}</div>
          <div className="grey-button">{score}</div>
          <div>
            <button className="stop-button">STOP</button>
          </div>
        </div>
      </div>
      <div className="rectangles">{renderField()}</div>
    </>
  );
};
