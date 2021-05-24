import { useState, useEffect } from 'react';

import Locator from './Locator';

function GeoLocation( { canLocate } ) {
    const [located, setLocated] = useState(false);
    const [location, setLocation] = useState(false);
    useEffect( () => {
      if(canLocate) {
        if(!located) {
          navigator.geolocation.getCurrentPosition( (position) => {
            setLocation(position);
            setLocated(true);
          }, () => {
            setLocated(false);
          });
        }
      }
    }, [canLocate, located, location] );
    return (
      <Locator location={ location } />
    );
  }

  export default GeoLocation;