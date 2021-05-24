import './Astronomy.css';

function Astronomy({data}) {
    return(
        <div className="Astronomy">
            <div title={ "Sunrise: " + data.sunrise } className="sunrise"><span></span> { data.sunrise }</div>
            <div title={ "Sunset: " + data.sunset } className="sunset"><span></span> { data.sunset }</div>
        </div>
    );
}

export default Astronomy;