import { useState, useEffect } from 'react';
import WeatherResponse from './WeatherResponse';
import Attribution from './Attribution';

import './Locator.css';

var OAuth = require('oauth');

var header = {
    "X-Yahoo-App-Id": "5BJTrb2A"
};

function Locator( { location } ) {
    const [weatherData, setweatherData] = useState(false);
    useEffect( () => {
      if(location && !weatherData) {
  
        var request = new OAuth.OAuth(
          null,
          null,
          'dj0yJmk9aWY1UTl0NlI4RzVGJmQ9WVdrOU5VSktWSEppTWtFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTc2',
          '475a7aec4be3ea664d15cae40f39dd3feeb97a2b',
          '1.0',
          null,
          'HMAC-SHA1',
          null,
          header
        );
  
        request.get(
          'https://weather-ydn-yql.media.yahoo.com/forecastrss?lat='+ location.coords.latitude +'&lon='+ location.coords.longitude + '&u=c&format=json',
          null,
          null,
          function (err, data, result) {
              if (err) {
                  console.log(err);
              } else {
                data = JSON.parse(data);
                setweatherData(data);
              }
          }
        );
      }
    }, [location, weatherData] );
    if(location) {
      return(
        <>
         { (weatherData) ? <WeatherResponse data={weatherData} /> : '' }
         <footer className="debug">
           <div>
           <h5>Debug information</h5>
            <p>Lat: { location.coords.latitude }</p>
            <p>Lng: { location.coords.longitude }</p>
          </div>
          <div>Copyright { new Date().getFullYear() } <a href="https://kpbowler.co.uk">K P Bowler</a>.</div>
          <Attribution />
         </footer>
        </>
      );
    }
  
    return (
      <div className="Locator">
        <img src="svg-loaders/puff.svg"  alt="Loading..." height="44" width="44" />
      </div>
    );
};

export default Locator;