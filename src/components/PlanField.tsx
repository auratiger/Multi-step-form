import React from "react";

interface Props {
  isSelected: boolean;
  handler: () => void;
  value: string | number;
  render: () => {};
  plan: any;
  isYearly: boolean;
}

const PlanField = ({
  isSelected,
  handler,
  value,
  render,
  plan,
  isYearly,
}: Props) => {
  const price: number = isYearly ? plan.yearly : plan.monthly;
  const period: string = isYearly ? "yr" : "mo";

  return (
    <label
      className={`grid h-[240px] flex-1 rounded-lg border p-6 focus-within:outline focus-within:outline-primary-pastel ${
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
        <span className="text-sm text-secondary-cool">{`$${price}/${period}`}</span>
        {isYearly && (
          <span className="text-sm text-primary-marine">2 months free</span>
        )}
      </div>
    </label>
  );
};

export default PlanField;
