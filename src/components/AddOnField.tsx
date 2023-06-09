import React, { useState } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";

import Checkbox from "./Checkbox";

import { inputVariants } from "@/motion/variants";

type Props = {
  name: string;
  description: string;
  price: number;
  isYearly: boolean;
  handler?: (state: boolean) => void;
  customAnimation: number;
};

const AddOnField = ({
  name,
  description,
  handler,
  price,
  isYearly,
  customAnimation,
}: Props) => {
  const [checked, setChecked] = useState(false);

  const handleEvent = () => {
    const newState: boolean = !checked;
    setChecked(newState);

    handler?.(newState);
  };

  const period: string = isYearly ? "yr" : "mo";

  return (
    <motion.button
      variants={inputVariants(customAnimation)}
      exit={{
        opacity: 0,
      }}
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
      <span className="ml-auto text-base font-light tracking-wider text-primary-purple">{`+$${price}/${period}`}</span>
    </motion.button>
  );
};

export default AddOnField;
