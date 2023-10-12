export const PromiseMethods = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('pierwszy');
    }, 300);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('drugi');
    }, 100);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('trzeci');
    }, 500);
  });

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log('Promise.all', values);
  });

  Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log('Promise.allSettled', results);
  });

  Promise.any([promise1, promise2, promise3]).then((value) => {
    console.log('Promise.any', value);
  });

  Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log('Promise.race', value);
  });

  return <div>Hello Promise Methods</div>;
};
