import axios from 'axios';
import {HttpCode} from '../const';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;


const token = localStorage.getItem('token')  ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {

    if (err.response) {
      const {response} = err;

      if (response.status === HttpCode.UNAUTHORIZED) {
        onUnauthorized();
      }
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
