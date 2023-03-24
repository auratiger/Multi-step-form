"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

import { Tab } from "@headlessui/react";
import classNames from "classnames";

import FormStepper from "@/components/FormStepper";

const FORM_STATE = {
  selectedIndex: 0,
  steps: {
    info: {
      valid: false,
      dirty: false,
      value: {
        name: "",
        dueDate: "",
      },
    },
    plan: {
      valid: false,
      dirty: false,
      value: {
        receiveEmails: false,
        receiveNotifications: false,
      },
    },
    addons: {
      valid: false,
      dirty: false,
      value: {
        receiveEmails: false,
        receiveNotifications: false,
      },
    },
    summary: {
      valid: false,
      dirty: false,
      value: {
        receiveEmails: false,
        receiveNotifications: false,
      },
    },
  },
};

const FORM_TABS = [
  {
    label: `YOUR INFO`,
    Component: dynamic(() => import("@/components/FormTabs/FormInfoTab"), {
      ssr: false,
    }),
  },
  {
    label: `SELECT PLAN`,
    Component: dynamic(() => import("@/components/FormTabs/FormPlanTab"), {
      ssr: false,
    }),
  },
  {
    label: `ADD-ONS`,
    Component: dynamic(() => import("@/components/FormTabs/FormAddOnsTab"), {
      ssr: false,
    }),
  },
  {
    label: `SUMMARY`,
    Component: dynamic(() => import("@/components/FormTabs/FormSummaryTab"), {
      ssr: false,
    }),
  },
];

export default function Example() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main className="flex h-full justify-center font-ubuntu text-lg font-medium text-white">
      <Tab.Group
        as={"div"}
        selectedIndex={selectedIndex}
        className="grid w-full grid-cols-2"
      >
        <Tab.List className="grid h-full content-start gap-10 space-x-1 rounded-xl bg-blue-900/20  bg-sidebar bg-cover bg-no-repeat p-12">
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
        <Tab.Panels className="mt-2">
          {FORM_TABS.map(({ Component }, idx) => (
            <Tab.Panel
              key={idx}
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              <Suspense fallback={`Loading Past Orders...`}>
                <Component />
              </Suspense>

              <FormStepper prev={() => {}} next={() => {}} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
}
