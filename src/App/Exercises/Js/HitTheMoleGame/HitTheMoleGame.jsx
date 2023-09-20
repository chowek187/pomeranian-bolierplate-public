import { useState } from 'react';
import './styles.css';
import { MenuView } from './MenuView';
import { GameView } from './GameView/GameView';

export const HitTheMoleGame = () => {
  return (
    <>
      <MenuView />

      <GameView />
    </>
  );
};
