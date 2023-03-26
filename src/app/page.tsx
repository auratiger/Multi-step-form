"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Tab } from "@headlessui/react";
import classNames from "classnames";

import Stepper from "@/components/Form/Stepper";
import TabHeader from "@/components/Form/TabHeader";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";

const FORM_TABS = [
  {
    tab: Tabs.INFO,
    label: `YOUR INFO`,
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    Component: dynamic(() => import("@/components/Form/Tabs/InfoForm"), {
      ssr: false,
    }),
  },
  {
    tab: Tabs.PLAN,
    label: `SELECT PLAN`,
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    Component: dynamic(() => import("@/components/Form/Tabs/PlanForm"), {
      ssr: false,
    }),
  },
  {
    tab: Tabs.ADDONS,
    label: `ADD-ONS`,
    title: "Select your plan",
    description: "",
    Component: dynamic(() => import("@/components/Form/Tabs/AddOnsForm"), {
      ssr: false,
    }),
  },
  {
    tab: Tabs.SUMMARY,
    label: `SUMMARY`,
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    Component: dynamic(() => import("@/components/Form/Tabs/SummaryForm"), {
      ssr: false,
    }),
  },
];

export default function Example() {
  const { form, setSelectedIndex } = useMultiFormContext();

  const selectedIndex = form.selectedIndex;

  return (
    <main className="flex h-full justify-center font-ubuntu text-lg font-medium text-white">
      <Tab.Group
        as={"div"}
        selectedIndex={selectedIndex}
        className="grid w-full grid-cols-3"
      >
        <Tab.List className="col-span-1 grid h-full content-start gap-10 space-x-1 overflow-hidden rounded-xl bg-blue-900/20  bg-sidebar bg-cover bg-bottom bg-no-repeat p-12">
          {FORM_TABS.map(({ label }, index) => {
            return (
              <Tab
                key={label}
                onClick={() => {
                  setSelectedIndex(index);
                }}
                className={"flex gap-4  focus:outline-none "}
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
                  {index}
                </span>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-primary-pastel">Step {index + 1}</span>
                  <span className="font-bold">{label}</span>
                </div>
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="col-span-2 mt-2">
          {FORM_TABS.map(({ title, description, Component }, idx) => (
            <Tab.Panel
              key={idx}
              className={
                "mx-auto grid h-full max-w-[70%] place-content-between rounded-xl bg-white p-4 py-10 outline-none"
              }
            >
              <div
                className={"flex w-full flex-col space-y-6 text-primary-marine"}
              >
                <TabHeader title={title} description={description} />

                {/* TODO: create an empty looking card the expected size of the Component as a fallback  */}
                <Suspense fallback={`Loading Past Orders...`}>
                  <Component />
                </Suspense>
              </div>

              <Stepper />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
}
