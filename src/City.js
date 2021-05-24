import './City.css';

function City({name}) {
    return(
        <h1 className="City">Weather for {name}</h1>
    );
}

export default City;