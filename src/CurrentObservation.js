import './CurrentObservation.css';

function CurrentObvservation({ condition }) {
    return (
      <div className="CurrentObservation">
        <h3>
            <span className={ "condition code-" + condition.code }></span>
            <span className="text">{ condition.text }</span>
        </h3>
        <h4>Temperature: { condition.temperature }<span className="degrees"></span></h4>
      </div>
    );
  }

  export default CurrentObvservation;