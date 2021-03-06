import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HourlyMeteo from './HourlyMeteo';

import styles from './MeteoForecast.module.css';

const api_weather = 'a007f6ea1885d8331305baf19e99c488';

function MeteoForecast({ setIcon, icon, city, destination }) {
  const [currentWeather, setCurrentWeather] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [coordinates, setCoordinates] = useState({
    lat: 48.858705,
    lon: 2.342865,
  });
  const [userCity] = useState(city);

  useEffect(async () => {
    const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${api_weather}&units=metric&lang=fr`);
    let res = result.data;
    setCurrentWeather(res.weather[0].description);
    setCurrentTemp(Math.round(res.main.temp));
    setIcon(res.weather[0].icon);
    setCoordinates(res.coord);
  }, [city]);

  return (
    <div className={styles.forecastScreen}>
      <h1 className={styles.forecastTitle}>A {userCity}, la météo prévoit</h1>
      <p>Tendance générale : {currentWeather}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={currentWeather} className={styles.forecastIcon} />
      <p>Temperature actuelle : {currentTemp} °C</p>
      <h2>Les 8 prochaines heures</h2>
      <HourlyMeteo destination={destination} coordinates={coordinates} />
    </div>
  );
}

export default MeteoForecast;
