import { useState, useEffect } from 'react';

import './Time.css';

function Time({time}) {
    const [formattedTime, setFormattedTime] = useState(false);
    useEffect(() => {
      const date = new Date(time * 1000);
  
      // Will display time in 10:30:23 format
      setFormattedTime(date.toLocaleTimeString());
    }, [time]);
    return (
      <div className="Time">Forecast updated: { formattedTime }</div>
    );
}

export default Time;