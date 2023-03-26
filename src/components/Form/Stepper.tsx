import React from "react";

import classNames from "classnames";

import { useMultiFormContext } from "@/contexts/FormStateContext";

const Stepper = () => {
  const {
    form: { selectedIndex, tabs },
    next,
    prev,
  } = useMultiFormContext();

  const isNextDisabled: boolean = !Object.values(tabs)[selectedIndex].valid;

  return (
    <footer className="flex w-full justify-between text-xl">
      {selectedIndex !== 0 && (
        <button className="font-bold text-secondary-cool" onClick={prev}>
          Go Back
        </button>
      )}
      <button
        className={classNames(
          "ml-auto rounded-lg bg-primary-marine px-5 py-3 text-white",
          isNextDisabled
            ? "bg-primary-marine-disabled"
            : "hover:bg-primary-marine-hover"
        )}
        onClick={next}
        disabled={isNextDisabled}
      >
        Next Step
      </button>
    </footer>
  );
};

export default Stepper;
