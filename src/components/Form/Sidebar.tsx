import React from "react";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { useMultiFormContext } from "@/contexts/FormStateContext";
import { navItemVariants } from "@/motion/variants";

const Sidebar = ({ form_tabs }) => {
  const {
    form: { selectedIndex, tabs },
    setSelectedIndex,
  } = useMultiFormContext();

  return (
    <Tab.List
      className={classNames(
        "col-span-1 flex flex-col content-start gap-12 overflow-hidden rounded-xl p-12",
        "bg-sidebar bg-cover bg-bottom bg-no-repeat max-md:bg-sidebarMobile",
        "max-md:absolute max-md:inset-0 max-md:bottom-auto max-md:h-[300px] max-md:flex-row max-md:justify-center max-md:gap-4 max-md:rounded-none"
      )}
    >
      {form_tabs.map(({ label, show }, index: number) => {
        if (!show) return;

        const arePreviousTabsValid: boolean = Object.keys(tabs)
          .slice(0, index)
          .every((key) => {
            return tabs[key].valid;
          });

        const isTabDisabled: boolean =
          selectedIndex !== index && !arePreviousTabsValid;

        return (
          <motion.div
            className="flex whitespace-nowrap"
            initial="hidden"
            animate="show"
            key={label}
            variants={navItemVariants(index)}
          >
            <Tab
              onClick={() => {
                setSelectedIndex(index);
              }}
              className={"flex gap-4 focus:outline-none "}
              disabled={isTabDisabled}
            >
              <span
                className={classNames(
                  "grid aspect-square h-full place-content-center rounded-full border border-white font-bold",
                  "max-md:h-[40px]",
                  {
                    "bg-primary-light text-primary-marine":
                      selectedIndex === index,
                  }
                )}
              >
                {index + 1}
              </span>
              <div className="flex flex-col items-start justify-center max-md:sr-only">
                <span className="text-primary-pastel">Step {index + 1}</span>
                <span className="font-bold">{label}</span>
              </div>
            </Tab>
          </motion.div>
        );
      })}
    </Tab.List>
  );
};

export default Sidebar;
