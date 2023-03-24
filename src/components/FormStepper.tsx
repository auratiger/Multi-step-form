import React from "react";

const FormStepper = ({ prev, next }) => {
  return (
    <footer>
      <button onClick={prev}>Back</button>
      <button onClick={next}>Next</button>
    </footer>
  );
};

export default FormStepper;
