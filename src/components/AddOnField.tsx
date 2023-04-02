import React, { useState } from "react";

import classNames from "classnames";

import Checkbox from "./Checkbox";

type Props = {
  name: string;
  description: string;
  monthly: number;
  handler?: (e: any, state: boolean) => void;
};

const AddOnField = ({ name, description, handler, monthly }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleEvent = (e: any) => {
    const newState: boolean = !checked;
    setChecked(newState);

    handler?.(e, newState);
  };

  return (
    <button
      onClick={handleEvent}
      className={classNames(
        "flex items-center justify-start gap-6 rounded-lg border p-6 outline-primary-purple focus:bg-secondary-alabaster focus:outline focus:outline-2",
        checked && "bg-secondary-alabaster outline outline-2"
      )}
    >
      <Checkbox checked={checked} />
      <div className="mt-auto grid gap-1 text-start">
        <span className="text-md">{name}</span>
        <span className="text-sm font-light text-secondary-cool">
          {description}
        </span>
      </div>
      <span className="ml-auto text-base font-light tracking-wider text-primary-purple">{`+$${monthly}/yr`}</span>
    </button>
  );
};

export default AddOnField;
