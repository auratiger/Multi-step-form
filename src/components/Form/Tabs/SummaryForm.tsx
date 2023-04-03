import React from "react";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";

const SummaryForm = () => {
  const {
    form: {
      tabs: {
        [Tabs.PLAN]: {
          value: { plan, isYearly, price: planPrice },
        },
        [Tabs.ADDONS]: {
          value: { addons },
        },
      },
    },
    setSelectedIndex,
  } = useMultiFormContext();

  const period: string = isYearly ? "yr" : "mo";
  const periodLong: string = isYearly ? "Year" : "Month";

  const calculateTotal = (): number => {
    const addonsTotal: number = addons.reduce((acc, current) => {
      return acc + current.price;
    }, 0);

    return planPrice + addonsTotal;
  };

  const moveToPlanStep = () => {
    setSelectedIndex(1);
  };

  return (
    <>
      <div
        className={
          "grid gap-4 rounded-lg bg-secondary-alabaster p-8 font-light text-secondary-cool"
        }
      >
        <div className="flex items-center justify-between">
          <div className="grid place-items-start">
            <span className="text-lg font-bold text-primary-marine">{`${plan} (${periodLong}ly)`}</span>
            <button
              className="text-sm font-light underline"
              onClick={moveToPlanStep}
            >
              change
            </button>
          </div>
          <span className="text-lg font-bold text-primary-marine">{`$${planPrice}/${period}`}</span>
        </div>
        <div className="border"></div>
        <div className="grid gap-4">
          {addons.map((addon) => {
            return (
              <div key={addon.name} className="flex justify-between">
                <span>{addon.name}</span>
                <span className="text-primary-marine">{`$${addon.price}/${period}`}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between px-6 font-light text-secondary-cool">
        <span>{`Total (per ${periodLong})`}</span>
        <span className="text-xl font-bold text-primary-purple">
          {`+$${calculateTotal()}/${period}`}
        </span>
      </div>
    </>
  );
};

export default SummaryForm;
