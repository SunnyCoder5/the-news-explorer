import { checkResponse } from './MainApi';
import { from, to, pageSize, APIkey } from './constants';

export const getNews = (q) => {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${APIkey}`
  ).then(checkResponse);
};
