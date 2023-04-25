"use client";

import { Suspense } from "react";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { motion } from "framer-motion";

import Sidebar from "@/components/Form/Sidebar";
import Stepper from "@/components/Form/Stepper";
import TabHeader from "@/components/Form/TabHeader";
import AddOnsForm from "@/components/Form/Tabs/AddOnsForm";
import CompleteForm from "@/components/Form/Tabs/CompleteForm";
import InfoForm from "@/components/Form/Tabs/InfoForm";
import PlanForm from "@/components/Form/Tabs/PlanForm";
import SummaryForm from "@/components/Form/Tabs/SummaryForm";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";
import { formVariants, tabVariants } from "@/motion/variants";

const FORM_TABS = [
  {
    tab: Tabs.INFO,
    label: `YOUR INFO`,
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    Component: () => <InfoForm />,
    show: true,
  },
  {
    tab: Tabs.PLAN,
    label: `SELECT PLAN`,
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    // TODO: framer-motion doesnt' activate correctly for children when using dynamic components. Maybe fix some day
    // Component: dynamic(() => import("@/components/Form/Tabs/PlanForm"), {
    //   ssr: false,
    // }),
    Component: () => <PlanForm />,
    show: true,
  },
  {
    tab: Tabs.ADDONS,
    label: `ADD-ONS`,
    title: "Pick add-ons",
    description: "Add-ons help enchance your gaming experience.",
    // Component: dynamic(() => import("@/components/Form/Tabs/AddOnsForm"), {
    //   ssr: false,
    // }),
    Component: () => <AddOnsForm />,
    show: true,
  },
  {
    tab: Tabs.SUMMARY,
    label: `SUMMARY`,
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    // Component: dynamic(() => import("@/components/Form/Tabs/SummaryForm"), {
    //   ssr: false,
    // }),
    Component: () => <SummaryForm />,
    show: true,
  },
  {
    tab: Tabs.COMPLETE,
    label: `COMPLETE`,
    // Component: dynamic(() => import("@/components/Form/Tabs/CompleteForm"), {
    //   ssr: false,
    // }),
    Component: () => <CompleteForm />,
    show: true,
  },
];

export default function Example() {
  const {
    form: { selectedIndex },
  } = useMultiFormContext();

  return (
    <main className="flex h-full justify-center bg-white font-ubuntu text-lg font-medium text-white max-md:bg-secondary-magnolia">
      <Tab.Group
        as={"div"}
        selectedIndex={selectedIndex}
        className="mx-auto grid w-full grid-cols-3 py-10 px-4"
      >
        <Sidebar form_tabs={FORM_TABS} />
        <Tab.Panels
          className={classNames(
            "z-10 col-span-2 rounded-lg bg-white",
            "max-md:col-span-4 max-md:my-auto"
          )}
        >
          {FORM_TABS.map(({ title, description, Component }, index: number) => (
            <Tab.Panel
              key={index}
              className={
                "mx-auto flex h-full flex-col place-content-between rounded-xl bg-white outline-none md:max-w-[70%]"
              }
            >
              <motion.div
                variants={tabVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={
                  "flex h-full flex-col place-content-start p-6 text-primary-marine"
                }
              >
                <TabHeader title={title} description={description} />

                {/* TODO: create an empty looking card the expected size of the Component as a fallback  */}
                <Suspense fallback={`Loading Past Orders...`}>
                  <motion.div
                    variants={formVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    <Component />
                  </motion.div>
                </Suspense>
              </motion.div>

              <Stepper />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
}
