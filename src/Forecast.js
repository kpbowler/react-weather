import './Forecast.css';

function Forecast({ data }) {

    return (
        <div className="Forecast">
            <h3>10 day forecast</h3>
            { data.map( day => (
                <div className="ForecastDay" key={day.date}>
                    <div className="day">{ day.day }</div>
                    <div className="condition">{ day.text }</div>
                    <div className="temps">
                        <div className="high">H: { day.high }</div>
                        <div className="low">L: { day.low }</div>
                    </div>
                </div>
             ) ) }
        </div>
    );
}

export default Forecast;