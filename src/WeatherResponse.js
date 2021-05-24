import { useState, useEffect } from 'react';
import City from './City';
import Time from './Time';
import CurrentObservation from './CurrentObservation';
import Forecast from './Forecast';
import Astronomy from './Astronomy';

function WeatherResponse({ data }) {
    const [city, setCity] = useState(false);
    const [pubTime, setPubTime] = useState(false);
  
    useEffect( () => {
      setCity(data.location.city);
      setPubTime(data.current_observation.pubDate);
    }, [data.location.city, data.current_observation.pubDate]);
  
    return (
      <div className="WeatherResponse">
        <City name={ city } />
        <CurrentObservation condition={ data.current_observation.condition } />
        <Astronomy data={ data.current_observation.astronomy } />
        <Time time={ pubTime } />
        <Forecast data={ data.forecasts } />
      </div>
    );
  }

  export default WeatherResponse;