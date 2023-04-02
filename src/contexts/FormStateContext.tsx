"use client";

import { createContext, useCallback, useContext, useState } from "react";

import produce from "immer";

export enum Tabs {
  INFO = "INFO",
  PLAN = "PLAN",
  ADDONS = "ADDONS",
  SUMMARY = "SUMMARY",
}

export const FORM_STATE = {
  selectedIndex: 2,
  tabs: {
    [Tabs.INFO]: {
      valid: false,
      value: {
        name: "",
        email: "",
        phone: "",
      },
    },
    [Tabs.PLAN]: {
      valid: false,
      value: {
        plan: null,
        yearly: false,
      },
    },
    [Tabs.ADDONS]: {
      valid: false,
      value: {
        receiveEmails: false,
        receiveNotifications: false,
      },
    },
    [Tabs.SUMMARY]: {
      valid: false,
      value: {
        receiveEmails: false,
        receiveNotifications: false,
      },
    },
  },
};

export const FormStateContext = createContext({
  form: FORM_STATE,
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
  ) => {},
  next: () => {},
  prev: () => {},
  setSelectedIndex: (index: number) => {},
});

export const CreateTaskMultiStepFormContainer = ({ children }) => {
  const [form, setForm] = useState(FORM_STATE);

  const next = useCallback(() => {
    setForm(
      produce((form) => {
        form.selectedIndex += 1;
      })
    );
  }, [setForm]);

  const prev = useCallback(() => {
    setForm(
      produce((form) => {
        form.selectedIndex -= 1;
      })
    );
  }, [setForm]);

  const setSelectedIndex = useCallback(
    (index: number) => {
      setForm(
        produce((form) => {
          form.selectedIndex = index;
        })
      );
    },
    [setForm]
  );

  return (
    <FormStateContext.Provider
      value={{
        form,
        setForm,
        next,
        prev,
        setSelectedIndex,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

export const useMultiFormContext = () => useContext(FormStateContext);
