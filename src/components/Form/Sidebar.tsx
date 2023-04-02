import React from "react";

import { Tab } from "@headlessui/react";
import classNames from "classnames";

import { useMultiFormContext } from "@/contexts/FormStateContext";

const Sidebar = ({ form_tabs }) => {
  const {
    form: { selectedIndex, tabs },
    setSelectedIndex,
  } = useMultiFormContext();

  return (
    <Tab.List className="col-span-1 grid h-full content-start gap-10 space-x-1 overflow-hidden rounded-xl bg-blue-900/20  bg-sidebar bg-cover bg-bottom bg-no-repeat p-12">
      {form_tabs.map(({ label, tab }, index: number) => {
        const isTabDisabled = !tabs[tab].valid;

        return (
          <Tab
            key={label}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={"flex gap-4  focus:outline-none "}
            disabled={false}
          >
            <span
              className={classNames(
                "grid aspect-square h-full place-content-center rounded-full border border-white font-bold",
                {
                  "bg-primary-light text-primary-marine":
                    selectedIndex === index,
                }
              )}
            >
              {index + 1}
            </span>
            <div className="flex flex-col items-start justify-center">
              <span className="text-primary-pastel">Step {index + 1}</span>
              <span className="font-bold">{label}</span>
            </div>
          </Tab>
        );
      })}
    </Tab.List>
  );
};

export default Sidebar;
