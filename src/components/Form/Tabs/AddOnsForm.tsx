import React from "react";

import produce from "immer";

import AddOnField from "@/components/AddOnField";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";

export const ADD_ONS = [
  {
    name: "Online Service",
    description: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    name: "Large Storage",
    description: "Extra 1 TB of cloud storage",
    monthly: 2,
    yearly: 20,
  },
  {
    name: "Customizable profile",
    description: "Custom them on your profile",
    monthly: 2,
    yearly: 20,
  },
];

const AddOnsForm = () => {
  const { form, setForm } = useMultiFormContext();

  const handleAddOnSelect = (index: number) => {
    setForm(
      produce((formState) => {
        formState.tabs[Tabs.ADDONS].value.addons.push;
      })
    );
  };

  return (
    <form className="grid gap-4 text-xl" onSubmit={(e) => e.preventDefault()}>
      {ADD_ONS.map(({ name, description, monthly, yearly }) => {
        const isYearly: boolean = form.tabs[Tabs.PLAN].value.isYearly;
        const price: number = isYearly ? yearly : monthly;

        return (
          <AddOnField
            key={name}
            name={name}
            description={description}
            price={price}
            isYearly={isYearly}
          />
        );
      })}
    </form>
  );
};

export default AddOnsForm;
