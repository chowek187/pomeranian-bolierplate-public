import { useState } from 'react';
import { Button } from './Button/Button';

export const MenuView = () => {
  const [timeButton, setTimeButton] = useState(null);
  const handleClick = (event) => {
    console.log(event.target.id);
    setTimeButton(event.target.id);
  };
  const [moleButton, setMoleButton] = useState(null);
  const handleMoleButton = (event) => {
    console.log(event.target.id);
    setMoleButton(event.target.id);
  };
  const [startButton, setStartButton] = useState(null);
  const handleStartButton = (event) => {
    console.log(event.target.id);
    setStartButton(event.target.id);
  };
  return (
    <>
      <h1>KRET</h1>
      <p>
        Gra polega na podąaniu za krecikiem i trafieniu na kwadrat, w którym się
        pojawił.
      </p>
      <div className="game-menu">
        <div className="row-mole">
          <p className="margin-mole">CZAS GRY</p>
          <div className="button-general">
            <Button
              id={1}
              handleClick={handleClick}
              timeButton={timeButton}
              label={'1 minuta'}
            />
            <Button
              id={2}
              handleClick={handleClick}
              timeButton={timeButton}
              label={'2 minuty'}
            />
            <Button
              id={3}
              handleClick={handleClick}
              timeButton={timeButton}
              label={'3 minuty'}
            />
          </div>
        </div>
        <div className="row-mole">
          <p className="margin-mole">LICZBA KRETOW</p>
          <div className="button-general">
            <Button
              id={4}
              handleClick={handleMoleButton}
              timeButton={moleButton}
              label={'1 kret'}
            />
            <Button
              id={5}
              handleClick={handleMoleButton}
              timeButton={moleButton}
              label={'2 krety'}
            />
            <Button
              id={6}
              handleClick={handleMoleButton}
              timeButton={moleButton}
              label={'3 krety'}
            />
          </div>
        </div>
        <div className="row-mole">
          <p className="margin-mole">PRZYCISKI STERUJACE</p>
          <div className="button-general">
            <Button
              id={7}
              handleClick={handleStartButton}
              timeButton={startButton}
              label={'START'}
            />
          </div>
        </div>
      </div>
    </>
  );
};
