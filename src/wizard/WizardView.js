import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const WizardView = () => {
  const [page, setPage] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [recommendScore, setRecommendScore] = useState(0);

  const PageThree = () => <div>Page Three</div>;
  const pages = [
    <PageOne
      firstName={firstName}
      lastName={lastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
    />,
    <PageTwo
      recommendScore={recommendScore}
      setRecommendScore={setRecommendScore}
    />,
    <PageThree />,
  ];

  const validatePageOne = () => {
    return page === 0 && (!firstName.length || !lastName.length) ? true : false;
  };

  const validatePageTwo = () => {
    return page === 1 && recommendScore === 0;
  };

  return (
    <div className="wizard-container">
      <h3>Question or Feedback?</h3>
      <hr />
      <div className="page-container">{pages[page]}</div>
      <div className="required-container">
        <span> * Field is required</span>
      </div>
      <div className="buttons-container">
        <div className="prev-container" onClick={() => setPage(page - 1)}>
          {page > 0 && (
            <>
              <NavigateBeforeIcon />
              <button className="prev">Previous</button>
            </>
          )}
        </div>
        <div className="next-container" onClick={() => setPage(page + 1)}>
          {page < pages.length - 1 && (
            <>
              <button
                className="next"
                disabled={validatePageOne() || validatePageTwo()}
              >
                Next
              </button>
              <NavigateNextIcon />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WizardView;
