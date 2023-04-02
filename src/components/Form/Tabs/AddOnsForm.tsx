import React from "react";

import AddOnField from "@/components/AddOnField";

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
  return (
    <form className="grid gap-4 text-xl" onSubmit={(e) => e.preventDefault()}>
      {ADD_ONS.map(({ name, description, monthly }) => {
        return (
          <AddOnField
            key={name}
            name={name}
            description={description}
            monthly={monthly}
          />
        );
      })}
    </form>
  );
};

export default AddOnsForm;
