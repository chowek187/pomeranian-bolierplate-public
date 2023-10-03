export const Json = () => {
  const testObj = `{ "test": "asd", "isVisible": false }`;

  const stringifyObj = {
    a: '1',
    b: '2',
  };

  const extendedObj = {
    items: [
      {
        id: 1,
        name: 'Szklanka',
      },
      {
        id: 2,
        name: 'Monitor',
      },
      {
        id: 3,
        name: 'Telefon',
      },
    ],
    isEmpty: false,
    totalCount: 3,
    dateOfExpired: null,
  };

  console.log(JSON.stringify(extendedObj));

  return <div>Hello Json</div>;
};
