/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MeteoForecast from './MeteoForecast';

import styles from './LandingPage.module.css';

function StartMeteoPage({ destination, city }) {
  const api_weather = 'a007f6ea1885d8331305baf19e99c488';
  const [meteoPage, setMeteoPage] = useState('collapsed');
  const [weatherIcon, setWeatherIcon] = useState('02d');

  useEffect(async () => {
    const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_weather}&units=metric&lang=fr`);
    setWeatherIcon(result.data.weather[0].icon);
  }, [destination]);

  if (meteoPage === 'collapsed') {
    return (
      <div className={styles.card}>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          role="button"
          alt="cardMeteo"
          className={styles.cardMeteo}
          onClick={() => setMeteoPage('opened')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button className={styles.exitButton} onClick={() => setMeteoPage('collapsed')}>
          X
        </button>
        <MeteoForecast setIcon={setWeatherIcon} icon={weatherIcon} destination={destination} city={city} />
      </div>
    );
  }
}

export default StartMeteoPage;
