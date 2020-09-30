import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const PageTwo = ({ textAreaValue, setTextAreaValue }) => {
  return (
    <>
      <h4>Have additional feedback? Please Share!</h4>
      <TextareaAutosize
        aria-label="empty textarea"
        rowsMin={10}
        onChange={(e) => setTextAreaValue(e.target.value)}
        value={textAreaValue}
      />
      ;
    </>
  );
};

export default PageTwo;
