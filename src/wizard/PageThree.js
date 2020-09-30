import React from "react";

const PageThree = ({ recommendScore, textAreaValue }) => {
  return (
    <div className="page-three-container">
      <div className="survey-response-container">
        <h4>Your Survey Response:</h4>
        <p className="response-label">
          Likely to recommend the product:
          <span className="response"> {recommendScore}/10</span>
        </p>
        <p className="response-label">
          Additional feedback: <span className="response">{textAreaValue}</span>
        </p>
      </div>
      <br />
      <h4>Thank you</h4>
      <p>
        We value our customers and take their feedback seriously. If we have any
        questions or updates, we'll get in touch.
      </p>
    </div>
  );
};

export default PageThree;
