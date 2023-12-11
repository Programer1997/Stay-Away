import React from "react";
import "./styles.scss";

const GetStarted = (props) => {
  const { firstName, showForm, setShowForm } = props;

  const handleShowForm = () => {
    console.log("handle show form working on");
    setShowForm(true);
  };

  return (
    <div className="getStartedContainer">
      <div className="welcomeText">
        <h2>{`Welcome, ${firstName}`}</h2>
        <p>
          Guests can reserve your place 24 hours after you publish – here is how
          to prepare.
        </p>
      </div>
      <div className="getStartedCard">
        <p className="textCardGetStarted">Complete the information</p>
        <p className="redText">Requiered to publish</p>
        <button className="btn btn-success" onClick={handleShowForm}>
          Get Start<span>&#10132;</span>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
