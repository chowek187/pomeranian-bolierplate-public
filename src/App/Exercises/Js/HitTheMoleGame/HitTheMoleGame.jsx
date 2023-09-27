import './styles.css';
import { useState } from 'react';
import { MenuView } from './MenuView';
import { GameView } from './GameView/GameView';

export const HitTheMoleGame = () => {
  const [clickStartButton, setClickStartButton] = useState(false);
  const [howManyMinutes, setHowManyMinutes] = useState(null);
  const [howManyMoles, setHowManyMoles] = useState(null);

  return (
    <>
      <MenuView
        clickStartButton={clickStartButton}
        setClickStartButton={setClickStartButton}
        howManyMinutes={howManyMinutes}
        setHowManyMinutes={setHowManyMinutes}
        howManyMoles={howManyMoles}
        setHowManyMoles={setHowManyMoles}
      />

      {clickStartButton && (
        <GameView howManyMinutes={howManyMinutes} howManyMoles={howManyMoles} />
      )}
    </>
  );
};
