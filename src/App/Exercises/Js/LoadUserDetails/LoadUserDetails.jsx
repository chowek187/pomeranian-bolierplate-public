import React, { useState } from 'react';

function LoadUserDetails() {
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

  // Funkcja do pobierania wszystkich danych użytkownika
  async function loadAllUserData() {
    try {
      const user = await loadUser();
      setError(null); // Wyczyść błąd

      const userDetails = await loadUserDetails(user.id);

      // Ustaw dane użytkownika w stanie komponentu
      setUserData(userDetails);
    } catch (error) {
      setError(error.message);
      console.error('Błąd podczas ładowania danych użytkownika:', error);
    }
  }

  // Funkcja do wyczyszczenia danych użytkownika i błędu
  function clearUserData() {
    setUserData(null);
    setError(null);
  }

  return (
    <div>
      <button onClick={loadAllUserData}>Załaduj detale użytkownika</button>
      <button onClick={clearUserData}>Wyczyść użytkownika</button>
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
}

export default LoadUserDetails;

// function loadUser() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "John Doe" });
//     }, 2000);
//   });
// }

// na podstawie ww funkcji należy stworzyć podobną funkcje loadUserDetails(userId)

// loadUserDetails(userId) zwraca promise z { id: userId, age: 30, country: "Poland" }
// (zwrócić uwagę na parametr id)

// stwórzmy funkcje loadAllUserData() która wywoła loadUser, a następnie loadUserDetails
// pamiętajmy o przekazaniu id do loadAllUserData z rezultatów loadUser (name pomijamy)

// następnie dodajmy button załaduj detale użytkownika

// dodajemy też miejsce na wyświetlanie danych użytkownika (id, age, country)

// po naciśnięciu w przycisk załadować dane z loadAllUserData i wyświetlić aktualnie załadowanego usera

// po kliknięciu w button załaduj detale użytkownika wyczyść aktualnie załadowanego użytkownika
// (w oczekiwaniu na kolejnego)

// Kontynuacja naszego zadania z Promise (obsluga errora)

// dodajmy nowy div na wyświetlenie błędu

// po kliknięciu w button załaduj detale użytkownika wyczyśćmy także aktualny błąd.

// zmodyfikujmy loadUserDetails w taki sposób aby z 50% prawdopodobieństwem rejectowała promisa
// z bledem

// teść błędu: błąd server: nieudane wyszukanie dla userId: xxx użyjmy klasy Error

// w funkcji loadAllUserData przechwycić błąd i wyświetlić

// przetestować aż do uzyskania błędu (możemy skrócić czas timeoutów na czas testów)
