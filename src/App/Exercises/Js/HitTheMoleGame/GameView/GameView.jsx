import './GameView.css';
import { MoleIcon } from '../Mole/Mole';
import { useState } from 'react';

const InitialMap = [
  { id: 1, isMolePresent: false, isClicked: false },
  { id: 2, isMolePresent: false, isClicked: false },
  { id: 3, isMolePresent: true, isClicked: false },
  { id: 4, isMolePresent: false, isClicked: false },
  { id: 5, isMolePresent: false, isClicked: false },
  { id: 6, isMolePresent: false, isClicked: false },
  { id: 7, isMolePresent: false, isClicked: false },
  { id: 8, isMolePresent: false, isClicked: false },
  { id: 9, isMolePresent: false, isClicked: false },
  { id: 10, isMolePresent: false, isClicked: false },
];

export const GameView = () => {
  const [krecikMap, setKrecikMap] = useState(InitialMap);

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

  function handleMoleClick(item) {
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
          <div className="grey-button">1:35</div>
          <div className="grey-button">16</div>
          <div>
            <button className="stop-button">STOP</button>
          </div>
        </div>
      </div>
      <div className="rectangles">{renderField()}</div>
    </>
  );
};
