import React, { useState } from "react";

import produce from "immer";

import AdvancedIcon from "@/components/icons/icon-advanced";
import ArcadeIcon from "@/components/icons/icon-arcade";
import ProIcon from "@/components/icons/icon-pro";
import Toggle from "@/components/Toggle";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";

export const PLANS = [
  {
    name: "Arcade",
    monthly: 9,
    yearly: 90,
    renderImage: () => <ArcadeIcon className="h-[55px] w-[55px]" />,
  },
  {
    name: "Advanced",
    monthly: 12,
    yearly: 120,
    renderImage: () => <AdvancedIcon className="h-[55px] w-[55px]" />,
  },
  {
    name: "Pro",
    monthly: 15,
    yearly: 150,
    renderImage: () => <ProIcon className="h-[55px] w-[55px]" />,
  },
];

const PlanForm = () => {
  const { setForm } = useMultiFormContext();
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (e) => {
    setForm(
      produce((formState) => {
        formState.tabs[Tabs.PLAN] = {
          value: {
            plan: PLANS[0].name,
            yearly: false,
          },
          valid: true,
        };
      })
    );
  };

  const onSubToggle = (e, state: boolean) => {
    setIsYearly(state);
  };

  return (
    <form className="grid gap-10 text-xl" onSubmit={(e) => e.preventDefault()}>
      <div className="flex  gap-4">
        {PLANS.map((plan) => {
          return (
            <button
              key={plan.name}
              onClick={handlePlanSelect}
              onFocus={handlePlanSelect}
              className="grid h-[240px] flex-1 rounded-lg border p-6 focus:bg-secondary-alabaster focus:outline-primary-pastel"
            >
              {plan.renderImage()}

              <div className="mt-auto grid gap-1 text-start">
                <span className="text-md">{plan.name}</span>
                <span className="text-sm text-secondary-cool">{`$${plan.monthly}/yr`}</span>
                {isYearly && (
                  <span className="text-sm text-primary-marine">
                    2 months free
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex w-full justify-center gap-8 rounded-lg bg-secondary-alabaster px-4 py-3">
        <span>Monthly</span>
        <Toggle checked={isYearly} onChange={onSubToggle} />
        <span>Yearly</span>
      </div>
      <button className="sr-only"></button>
    </form>
  );
};

export default PlanForm;
