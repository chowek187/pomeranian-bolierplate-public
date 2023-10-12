import { React } from 'react';

export const PromiseMethodsExcercise = () => {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  function App() {
    const handleFetchDataFast = async () => {
      try {
        const result = await fetchDataFast();
        console.log('fetchDataFast result:', result);
      } catch (error) {
        console.error('fetchDataFast error:', error);
      }
    };

    const handleFetchDataLong = async () => {
      try {
        const result = await fetchDataLong();
        console.log('fetchDataLong result:', result);
      } catch (error) {
        console.error('fetchDataLong error:', error);
      }
    };

    const handleFetchDataError = async () => {
      try {
        const result = await fetchDataError();
        console.log('fetchDataError result:', result);
      } catch (error) {
        console.error('fetchDataError error:', error);
      }
    };

    const handlePromiseAllFastLong = async () => {
      try {
        const results = await Promise.all([fetchDataFast(), fetchDataLong()]);
        console.log(
          'Promise.all [fetchDataFast, fetchDataLong] results:',
          results
        );
      } catch (error) {
        console.error(
          'Promise.all [fetchDataFast, fetchDataLong] error:',
          error
        );
      }
    };

    const handlePromiseAllFastLongError = async () => {
      try {
        const results = await Promise.all([
          fetchDataFast(),
          fetchDataLong(),
          fetchDataError(),
        ]);
        console.log(
          'Promise.all [fetchDataFast, fetchDataLong, fetchDataError] results:',
          results
        );
      } catch (error) {
        console.error(
          'Promise.all [fetchDataFast, fetchDataLong, fetchDataError] error:',
          error
        );
      }
    };

    const handlePromiseAllSettledFastLong = async () => {
      try {
        const results = await Promise.allSettled([
          fetchDataFast(),
          fetchDataLong(),
        ]);
        console.log(
          'Promise.allSettled [fetchDataFast, fetchDataLong] results:',
          results
        );
      } catch (error) {
        console.error(
          'Promise.allSettled [fetchDataFast, fetchDataLong] error:',
          error
        );
      }
    };

    const handlePromiseAllSettledFastLongError = async () => {
      try {
        const results = await Promise.allSettled([
          fetchDataFast(),
          fetchDataLong(),
          fetchDataError(),
        ]);
        console.log(
          'Promise.allSettled [fetchDataFast, fetchDataLong, fetchDataError] results:',
          results
        );
      } catch (error) {
        console.error(
          'Promise.allSettled [fetchDataFast, fetchDataLong, fetchDataError] error:',
          error
        );
      }
    };

    const handlePromiseAnyFastLong = async () => {
      try {
        const result = await Promise.any([fetchDataFast(), fetchDataLong()]);
        console.log(
          'Promise.any [fetchDataFast, fetchDataLong] result:',
          result
        );
      } catch (error) {
        console.error(
          'Promise.any [fetchDataFast, fetchDataLong] error:',
          error
        );
      }
    };

    const handlePromiseAnyFastLongError = async () => {
      try {
        const result = await Promise.any([
          fetchDataFast(),
          fetchDataLong(),
          fetchDataError(),
        ]);
        console.log(
          'Promise.any [fetchDataFast, fetchDataLong, fetchDataError] result:',
          result
        );
      } catch (error) {
        console.error(
          'Promise.any [fetchDataFast, fetchDataLong, fetchDataError] error:',
          error
        );
      }
    };

    const handlePromiseRaceFastLongError = async () => {
      try {
        const result = await Promise.race([
          fetchDataFast(),
          fetchDataLong(),
          fetchDataError(),
        ]);
        console.log(
          'Promise.race [fetchDataFast, fetchDataLong, fetchDataError] result:',
          result
        );
      } catch (error) {
        console.error(
          'Promise.race [fetchDataFast, fetchDataLong, fetchDataError] error:',
          error
        );
      }
    };

    const handlePromiseRaceLongError = async () => {
      try {
        const result = await Promise.race([fetchDataLong(), fetchDataError()]);
        console.log(
          'Promise.race [fetchDataLong, fetchDataError] result:',
          result
        );
      } catch (error) {
        console.error(
          'Promise.race [fetchDataLong, fetchDataError] error:',
          error
        );
      }
    };

    return (
      <div>
        <h1>Promise Exercises</h1>
        <button onClick={handleFetchDataFast}>fetchDataFast</button>
        <button onClick={handleFetchDataLong}>fetchDataLong</button>
        <button onClick={handleFetchDataError}>fetchDataError</button>
        <button onClick={handlePromiseAllFastLong}>
          Promise.all [fetchDataFast, fetchDataLong]
        </button>
        <button onClick={handlePromiseAllFastLongError}>
          Promise.all [fetchDataFast, fetchDataLong, fetchDataError]
        </button>
        <button onClick={handlePromiseAllSettledFastLong}>
          Promise.allSettled [fetchDataFast, fetchDataLong]
        </button>
        <button onClick={handlePromiseAllSettledFastLongError}>
          Promise.allSettled [fetchDataFast, fetchDataLong, fetchDataError]
        </button>
        <button onClick={handlePromiseAnyFastLong}>
          Promise.any [fetchDataFast, fetchDataLong]
        </button>
        <button onClick={handlePromiseAnyFastLongError}>
          Promise.any [fetchDataFast, fetchDataLong, fetchDataError]
        </button>
        <button onClick={handlePromiseRaceFastLongError}>
          Promise.race [fetchDataFast, fetchDataLong, fetchDataError]
        </button>
        <button onClick={handlePromiseRaceLongError}>
          Promise.race [fetchDataLong, fetchDataError]
        </button>
      </div>
    );
  }
};
