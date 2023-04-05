import { useId, useState } from "react";

import produce from "immer";

import AdvancedIcon from "@/components/icons/icon-advanced";
import ArcadeIcon from "@/components/icons/icon-arcade";
import ProIcon from "@/components/icons/icon-pro";
import PlanField from "@/components/PlanField";
import Toggle from "@/components/Toggle";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";

const iconSize: string = "h-[50px] w-[50px]";

export const PLANS = [
  {
    name: "Arcade",
    monthly: 9,
    yearly: 90,
    renderIcon: () => <ArcadeIcon className={iconSize} />,
  },
  {
    name: "Advanced",
    monthly: 12,
    yearly: 120,
    renderIcon: () => <AdvancedIcon className={iconSize} />,
  },
  {
    name: "Pro",
    monthly: 15,
    yearly: 150,
    renderIcon: () => <ProIcon className={iconSize} />,
  },
];

const PlanForm = () => {
  const {
    form: {
      tabs: {
        [Tabs.PLAN]: {
          value: { isYearly },
        },
      },
    },
    setForm,
  } = useMultiFormContext();

  const [selectedOption, setSelectedOption] = useState(-1);

  const id = useId();
  const monthId: string = id + "-mo";
  const yearId: string = id + "-yr";

  const handlePlanSelect = (index: number) => {
    return () => {
      setSelectedOption(index);
      setForm(
        produce((formState) => {
          const fs = formState.tabs[Tabs.PLAN];
          fs.valid = true;
          fs.value.plan = PLANS[index].name;
          fs.value.price = PLANS[index].monthly;
        })
      );
    };
  };

  const onSubToggle = (e, state: boolean) => {
    setForm(
      produce((formState) => {
        formState.tabs[Tabs.PLAN].value.isYearly = state;
      })
    );
  };

  return (
    <form className="grid gap-10" onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-4 max-md:flex-col">
        {PLANS.map((plan, index: number) => {
          const handler = handlePlanSelect(index);

          return (
            <PlanField
              key={plan.name}
              value={index}
              isYearly={isYearly}
              plan={plan}
              isSelected={selectedOption === index}
              render={plan.renderIcon}
              handler={handler}
              customAnimation={index}
            />
          );
        })}
      </div>

      <div className="flex w-full justify-center gap-8 rounded-lg bg-secondary-alabaster px-4 py-3">
        <span id={monthId}>Monthly</span>
        <Toggle
          checked={isYearly}
          onChange={onSubToggle}
          aria-describedby={`${monthId} ${yearId}`}
        />
        <span id={yearId}>Yearly</span>
      </div>
    </form>
  );
};

export default PlanForm;
