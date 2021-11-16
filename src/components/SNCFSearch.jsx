import React, { useState } from 'react';
import axios from 'axios';
import Journey from './Journey';

//require('dotenv').config();

function SNCFSearch({ departureLatitude, departureLongitude, arrivalLatitude, arrivalLongitude }) {
  // eslint-disable-next-line no-unused-vars
  const [SNCFfind, setSNCFfind] = useState();
  const getJourney = () => {
    axios
      .get(
        //`https://api.navitia.io/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A87986505&to=stop_area%3ASNCF%3A87382499&key=${process.env.TOKENKEY_SNCF}`,
        `https://api.navitia.io/v1/coverage/sncf/journeys?from=${departureLongitude}%3B${departureLatitude}&to=${arrivalLongitude}%3B${arrivalLatitude}&max_duration_to_pt=50000&key=33c6537e-59dc-429c-af63-ce45208739c6`,
        //'https://api.navitia.io/v1/coverage/sncf/journeys?from=2.35440%3B48.86260&to=2.32949%3B48.84193&key=33c6537e-59dc-429c-af63-ce45208739c6',
        //'https://api.navitia.io/v1/coverage/sncf/journeys?from=2.32052%3B48.84111&to=4.82609%3B45.74908&key=33c6537e-59dc-429c-af63-ce45208739c6',
      )

      .then((res) => setSNCFfind(res.data.journeys[0]));
  };
  let i = 0 && i < SNCFfind.sections.length && i++;
  return (
    <div>
      <button onClick={getJourney}> get journey </button>
      {SNCFfind && (
        <Journey
          journeyTime={Math.ceil(SNCFfind.duration / 60)}
          walkingDistance={SNCFfind.distances.walking}
          walkingTime={Math.ceil(SNCFfind.durations.walking / 60)}
          section1={SNCFfind.sections[i]}
          //section2={SNCFfind.sections[1]}
          //section3={SNCFfind.sections[2]}
          sectionType1={SNCFfind.sections[i].type}
          //sectionType2={SNCFfind.sections[1].type}
          //sectionType3={SNCFfind.sections[2].type}
          //sectionType4={SNCFfind.sections[3].type}
          //sectionType5={SNCFfind.sections[4].type}
        />
      )}
    </div>
  );
}

export default SNCFSearch;
