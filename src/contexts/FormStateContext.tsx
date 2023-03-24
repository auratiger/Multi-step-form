"use client";

import { createContext, useContext, useState } from "react";

export const FORM_STATE = {
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

export const FORM_STEPS = [
  {
    label: `YOUR INFO`,
  },
  {
    label: `SELECT PLAN`,
  },
  {
    label: `ADD-ONS`,
  },
  {
    label: `SUMMARY`,
  },
];

export const FormStateContext = createContext({
  form: FORM_STATE,
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
  ) => {},
});

export const CreateTaskMultiStepFormContainer = ({ children }) => {
  const [form, setForm] = useState(FORM_STATE);

  console.log(form);

  return (
    <FormStateContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

export const useMultiFormContext = () => useContext(FormStateContext);
