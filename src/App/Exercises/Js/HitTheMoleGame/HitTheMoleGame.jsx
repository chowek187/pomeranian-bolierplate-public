import './styles.css';
import { useState } from 'react';
import { MenuView } from './MenuView';
import { GameView } from './GameView/GameView';

export const HitTheMoleGame = () => {
  const [clickStartButton, setClickStartButton] = useState(false);

  return (
    <>
      <MenuView
        clickStartButton={clickStartButton}
        setClickStartButton={setClickStartButton}
      />

      {clickStartButton && <GameView />}
    </>
  );
};
