import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const PageOne = ({ firstName, lastName, setFirstName, setLastName }) => {
  const validateInput = (inputValue) => {
    return /^[a-zA-Z]+$/.test(inputValue) || inputValue === "";
  };

  return (
    <>
      <FormControl required={true}>
        <InputLabel htmlFor="first-name">First Name</InputLabel>
        <Input
          id="first-name"
          aria-describedby="first-name-input"
          onChange={(e) => {
            validateInput(e.target.value) && setFirstName(e.target.value);
          }}
          pattern="[a-zA-Z]+"
          value={firstName}
        />
      </FormControl>
      <br />
      <FormControl required={true}>
        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <Input
          id="last-name"
          aria-describedby="last-name-input"
          onChange={(e) => {
            validateInput(e.target.value) && setLastName(e.target.value);
          }}
          value={lastName}
        />
      </FormControl>
    </>
  );
};

export default PageOne;
