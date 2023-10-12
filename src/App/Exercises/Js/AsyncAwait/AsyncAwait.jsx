import { useEffect, useState } from 'react';

export const AsyncAwait = () => {
  const [text, setText] = useState('');
  function myPromiseFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Im resolved');
      }, 2000);
    });
  }
  async function myAsyncFunc() {
    const data = await myPromiseFunc();
    setText(data);
  }

  useEffect(() => {
    myAsyncFunc();
  }, []);

  return <div>{text}</div>;
};
