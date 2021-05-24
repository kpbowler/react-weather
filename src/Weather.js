import { useState, useEffect } from 'react';

import GeoLocation from './GeoLocation';

function Weather() {
    const [canLocate, setCanLocate] = useState(null);
    useEffect(() => {
      if(!navigator.geolocation) {
      } else {
        setCanLocate(true);
      }
    }, [canLocate]);
    
    return (
      <GeoLocation canLocate={ canLocate } />
    );
  };

  export default Weather;