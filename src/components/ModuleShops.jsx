/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import styles from './LandingPage.module.css';

function StartShopsPage() {
  const [shopsPage, setShopsPage] = useState('collapsed');

  if (shopsPage === 'collapsed') {
    return (
      <div className={styles.card}>
        <img
          src="https://www.radars-auto.com/carte-radar/carte-france-index.png"
          role="button"
          alt="cardShops"
          className={styles.imgCard}
          onClick={() => setShopsPage('opened')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setShopsPage('collapsed')}>Exit</button>
        <p> TEST SPECIAL SHOPS</p>
      </div>
    );
  }
}

export default StartShopsPage;
