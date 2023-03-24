import React from "react";

type StepperProps = {
  next: () => void;
  prev: () => void;
};

const FormStepper = ({ prev, next }: StepperProps) => {
  return (
    <footer className="flex w-full justify-between text-xl">
      <button className="font-bold text-secondary-cool" onClick={prev}>
        Go Back
      </button>
      <button
        className="rounded-lg bg-primary-marine px-5 py-3 text-white hover:bg-primary-marine-hover"
        onClick={next}
      >
        Next Step
      </button>
    </footer>
  );
};

export default FormStepper;
