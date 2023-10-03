import { useEffect } from 'react';

export const TryCatchAndFinally = () => {
  function dumb() {
    const randomNumber = Math.round(Math.random());

    if (randomNumber) {
      console.log('wszystko dziala');
    } else {
      throw new Error('niestety nie dziala');
    }
  }
  useEffect(() => {
    try {
      dumb();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('wszystko sie skonczylo');
    }
  }, []);

  return <>Elo</>;
};
