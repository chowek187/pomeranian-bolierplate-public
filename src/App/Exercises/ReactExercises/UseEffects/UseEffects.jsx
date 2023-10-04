import { useEffect } from 'react';

export const UseEffects = () => {
  const zaleznosc = null;

  useEffect(() => {
    //HELLO
  });

  useEffect(() => {
    // pusta tablica zaleznosci
  }, []);

  useEffect(() => {
    //zaleznosc "zaleznosc"
  }, [zaleznosc]);

  useEffect(() => {
    // czyszczenie /cleanup
    return () => {};
  });

  return <div>Hello UseEffect</div>;
};
