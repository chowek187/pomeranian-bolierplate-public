import React, { useState, useEffect } from 'react';

export const AsyncAwaitExcercises = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Funkcja do pobierania danych użytkownika
  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 1000); // Skrócenie czasu dla testów
    });
  }

  // Funkcja do pobierania szczegółowych danych użytkownika
  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          const error = new Error(
            `Błąd serwera: nieudane wyszukanie dla userId: ${userId}`
          );
          reject(error);
        } else {
          resolve({ id: userId, age: 30, country: 'Poland' });
        }
      }, 1000); // Skrócenie czasu dla testów
    });
  }

  async function loadAllUserData() {
    try {
      const user = await loadUser();
      setError(null);

      const userDetails = await loadUserDetails(user.id);

      // Ustaw dane użytkownika w stanie komponentu
      setUserData(userDetails);
    } catch (error) {
      setError(error.message);
      console.error('Błąd podczas ładowania danych użytkownika:', error);
    }
  }

  // Wywołaj funkcję loadAllUserData przy pomocy useEffect, aby załadować dane po załadowaniu komponentu
  useEffect(() => {
    loadAllUserData();
  }, []);

  return (
    <div>
      <h1>Async/Await Exercises</h1>
      <button onClick={loadAllUserData}>Załaduj detale użytkownika</button>
      <div id="userInfo">
        {userData ? (
          <>
            <p>ID: {userData.id}</p>
            <p>Age: {userData.age}</p>
            <p>Country: {userData.country}</p>
          </>
        ) : (
          <p>Brak danych użytkownika</p>
        )}
      </div>
      <div id="error">{error && <p>Błąd: {error}</p>}</div>
    </div>
  );
};
