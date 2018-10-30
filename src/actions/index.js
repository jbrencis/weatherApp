import axios from 'axios';

const API_KEY = 'a5940d28e591651981dd663fc4af43f1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},ch`;

  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
