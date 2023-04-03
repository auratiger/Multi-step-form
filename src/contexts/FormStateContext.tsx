"use client";

import { createContext, useCallback, useContext, useState } from "react";

import produce from "immer";

export enum Tabs {
  INFO = "INFO",
  PLAN = "PLAN",
  ADDONS = "ADDONS",
  SUMMARY = "SUMMARY",
  COMPLETE = "COMPLETE",
}

export const FORM_STATE = {
  selectedIndex: 4,
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
        price: null,
        isYearly: false,
      },
    },
    [Tabs.ADDONS]: {
      valid: true,
      value: {
        addons: [],
      },
    },
    [Tabs.SUMMARY]: {
      valid: true,
    },
    [Tabs.COMPLETE]: {
      valid: true,
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
  confirm: () => {},
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

  const confirm = useCallback(() => {}, [setForm]);

  return (
    <FormStateContext.Provider
      value={{
        form,
        setForm,
        next,
        prev,
        setSelectedIndex,
        confirm,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

export const useMultiFormContext = () => useContext(FormStateContext);
