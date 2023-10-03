import { useState } from 'react';

export const TryCatchExercise = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  function validate(event) {
    const value = event.target.value;

    if (isNaN(+value)) {
      throw new Error('Podana wartosc nie jest liczbowa');
    }
  }

  function handleChange(event) {
    setErrorMessage(null);
    try {
      validate(event);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <>
      <input type="text" onChange={handleChange} />
      {errorMessage && (
        <p>
          <strong>{errorMessage}</strong>
        </p>
      )}
    </>
  );
};
