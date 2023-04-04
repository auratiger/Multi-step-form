import React, { useEffect, useId } from "react";
import { useForm } from "react-hook-form";

import produce from "immer";

import Input from "@/components/Input";

import { Tabs, useMultiFormContext } from "@/contexts/FormStateContext";

const InfoForm = () => {
  const { form, setForm } = useMultiFormContext();

  const formSection = form.tabs[Tabs.INFO];

  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    shouldUseNativeValidation: true,
    mode: "onChange",
    defaultValues: {
      name: formSection.value.name,
      email: formSection.value.email,
      phone: formSection.value.phone,
    },
  });

  const id = useId();

  useEffect(() => {
    const value = getValues();

    setForm(
      produce((formState) => {
        formState.tabs[Tabs.INFO] = {
          value,
          valid: isValid,
        };
      })
    );
  }, [isValid, getValues, setForm]);

  const { ref: nameRef, ...nameControl } = register("name", {
    required: "Required",
    maxLength: 20,
  });
  const { ref: emailRef, ...emailControl } = register("email", {
    required: "This is required",
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: "Invalid email",
    },
  });

  const { ref: phoneRef, ...phoneControl } = register("phone", {
    required: "This is required",
    pattern: {
      value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      message: "Invalid phone number",
    },
  });

  return (
    <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
      <Input
        lable="Name"
        id={id + "-name"}
        innerRef={nameRef}
        placeholder="e.g. Stephen King"
        errorMessage={errors?.name?.message}
        {...nameControl}
      />
      <Input
        lable="Email Address"
        id={id + "-email"}
        type="email"
        innerRef={emailRef}
        placeholder="e.g. stephenking@lorem.com"
        errorMessage={errors?.email?.message}
        {...emailControl}
      />
      <Input
        lable="Phone Number"
        id={id + "-phone"}
        type="number"
        placeholder="e.g. +1 234 567 890"
        innerRef={phoneRef}
        errorMessage={errors?.phone?.message}
        {...phoneControl}
      />

      <button className="sr-only"></button>
    </form>
  );
};

export default InfoForm;
