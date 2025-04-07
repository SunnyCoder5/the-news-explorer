import { checkResponse, baseUrl } from './api';
import { from, to, pageSize, APIkey } from './constants';

export const getNews = (q) => {
  return fetch(
    `${baseUrl}?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${APIkey}`
  ).then(checkResponse);
};
