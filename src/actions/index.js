import axios from "axios";
const API_KEY = "306ba5a1ce33305b1cf3a0a003101496";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},CAN`;
  const res = axios.get(url);
  console.log(`action indexjs`, res);
  return {
    type: FETCH_WEATHER,
    payload: res
  };
}
