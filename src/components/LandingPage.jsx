import React, { useState } from 'react';
import CurrentDate from './Date';
import StartAstroPage from './ModuleSparkle';
import StartMeteoPage from './ModuleMeteo';
import StartShopsPage from './ModuleShops';
import StartSNCFPage from './ModuleSNCF';
import AdressSearch from './AdressSearch';
import styles from './LandingPage.module.css';

function LandingPage() {
  const [destinationData, setDestinationData] = useState(localStorage.getItem('destination'));
  const [originData, setOriginData] = useState(localStorage.getItem('origin'));
  const [userCity, setUserCity] = useState(localStorage.getItem('city'));

  function handleOrigin(adress) {
    setOriginData(adress);
  }

  function handleDestination(adress) {
    setDestinationData(adress);
    setUserCity(adress.locality);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('origin', JSON.stringify(originData));
    localStorage.setItem('destination', JSON.stringify(destinationData));
    localStorage.setItem('city', userCity);
  };
  return (
    <main className={styles.main}>
      <div className={styles.welcome}>
        <CurrentDate />
      </div>
      <div className={styles.input}>
        <AdressSearch origin={handleOrigin} destination={handleDestination} handleSubmit={handleSubmit} />
      </div>

      <div className={styles.cards}>
        {originData && destinationData && (
          <StartSNCFPage
            departureLatitude={originData.latitude}
            departureLongitude={originData.longitude}
            arrivalLatitude={destinationData.latitude}
            arrivalLongitude={destinationData.longitude}
          />
        )}
        <StartMeteoPage destination={destinationData} city={userCity} />

        {originData && destinationData && <StartShopsPage arrivalLatitude={destinationData.latitude} arrivalLongitude={destinationData.longitude} />}

        <StartAstroPage />
      </div>
    </main>
  );
}

export default LandingPage;
