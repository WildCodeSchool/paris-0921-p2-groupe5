import React from 'react';
import LandingPage from './components/LandingPage';
import { Route, Switch } from 'react-router-dom';
import ContactForm from './components/contactForm';
import WinSquad from './components/squadPictures';

import './App.css';

// import MeteoForecast from './Components/MeteoForecast';

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/About">
            <WinSquad />
            <ContactForm />
          </Route>
        </Switch>
        {/* <MeteoForecast /> */}
      </div>
    </div>
  );
}

export default App;
