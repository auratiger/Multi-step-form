import React, { ReactNode } from "react";

import { motion } from "framer-motion";

import { inputVariants } from "@/motion/variants";

interface Props {
  isSelected: boolean;
  handler: () => void;
  value: string | number;
  render: () => ReactNode;
  plan: any;
  isYearly: boolean;
  customAnimation: number;
}

const PlanField = ({
  isSelected,
  handler,
  value,
  render,
  plan,
  isYearly,
  customAnimation,
}: Props) => {
  const price: number = isYearly ? plan.yearly : plan.monthly;
  const period: string = isYearly ? "yr" : "mo";

  return (
    <motion.label
      variants={inputVariants(customAnimation)}
      className={`flex h-[240px] flex-1 gap-4 rounded-lg border p-6 focus-within:outline focus-within:outline-primary-pastel md:flex-col ${
        isSelected && "bg-secondary-alabaster"
      }`}
    >
      <input
        type="radio"
        name="plans"
        value={value}
        checked={isSelected}
        onFocus={handler}
        className="sr-only"
      />
      {render()}

      <div className="mt-auto grid gap-1 text-start">
        <span className="text-md">{plan.name}</span>
        <div className="flex flex-col max-md:flex-row max-md:gap-4">
          <span className="text-sm text-secondary-cool">{`$${price}/${period}`}</span>
          {isYearly && (
            <span className="text-sm text-primary-marine">2 months free</span>
          )}
        </div>
      </div>
    </motion.label>
  );
};

export default PlanField;
