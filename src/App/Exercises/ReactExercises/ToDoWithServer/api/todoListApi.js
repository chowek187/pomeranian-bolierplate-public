// stworzyc metode generyczna do pobierania swagger API

//BASE URL SHOLD BE PLACED ON .env
const BASE_API_URL = 'http://localhost:3333/';

//GET request

export const fetchData = async (url) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`${BASE_API_URL}${url}`);
    if (response.status === 200) {
      resolve(response.json());
    } else {
      reject(response.json().message);
    }
  });
};

//POST REQUEST

export const sendData = async (url, data, methodParam = 'POST') => {
  return new Promise(async (resolve, reject) => {
    const options = {
      method: methodParam,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${BASE_API_URL}${url}`, options);

    // response status

    if (response.status === 200) {
      resolve(response.json());
    } else {
      //zwracamy stringa
      reject(response.json().message);
      //zwracamy obiekt bledu
      //reject (response.json());
    }
  });
};
