import React from "react";

import classNames from "classnames";

import { useMultiFormContext } from "@/contexts/FormStateContext";

const Stepper = () => {
  const {
    form: { selectedIndex, tabs },
    next,
    prev,
    confirm,
  } = useMultiFormContext();

  const isNextDisabled: boolean = !Object.values(tabs)[selectedIndex].valid;
  const tabsCount: number = Object.keys(tabs).length - 1;

  return (
    <footer className="flex w-full justify-between text-xl">
      {selectedIndex !== 0 && selectedIndex !== tabsCount && (
        <button className="font-bold text-secondary-cool" onClick={prev}>
          Go Back
        </button>
      )}

      {selectedIndex < tabsCount - 1 && (
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
      )}

      {selectedIndex === tabsCount - 1 && (
        <button
          className={classNames(
            "ml-auto rounded-lg bg-primary-purple px-5 py-3 text-white hover:bg-primary-marine-hover"
          )}
          onClick={confirm}
          disabled={isNextDisabled}
        >
          Confirm
        </button>
      )}
    </footer>
  );
};

export default Stepper;
