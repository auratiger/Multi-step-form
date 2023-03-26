"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Tab } from "@headlessui/react";

import Sidebar from "@/components/Form/Sidebar";
import Stepper from "@/components/Form/Stepper";
import TabHeader from "@/components/Form/TabHeader";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";

export const FORM_TABS = [
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
  const {
    form: { selectedIndex },
  } = useMultiFormContext();

  return (
    <main className="flex h-full justify-center font-ubuntu text-lg font-medium text-white">
      <Tab.Group
        as={"div"}
        selectedIndex={selectedIndex}
        className="grid w-full grid-cols-3"
      >
        <Sidebar />
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
