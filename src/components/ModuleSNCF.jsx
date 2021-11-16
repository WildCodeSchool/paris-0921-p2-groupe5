/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import SNCFSearch from './SNCFSearch';
import styles from './LandingPage.module.css';

function StartSNCFPage({ departureLatitude, departureLongitude, arrivalLatitude, arrivalLongitude }) {
  const [SNCFPage, setSNCFPage] = useState('isHidden');
  if (SNCFPage === 'isHidden') {
    return (
      <div className={styles.card}>
        <img
          src="https://www.radars-auto.com/carte-radar/carte-france-index.png"
          role="button"
          alt="cardSNCF"
          className={styles.imgCard}
          onClick={() => setSNCFPage('!isHidden')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setSNCFPage('isHidden')}>Exit</button>
        <SNCFSearch
          departureLatitude={departureLatitude}
          departureLongitude={departureLongitude}
          arrivalLatitude={arrivalLatitude}
          arrivalLongitude={arrivalLongitude}
        />
      </div>
    );
  }
}

export default StartSNCFPage;
