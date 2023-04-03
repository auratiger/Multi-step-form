import React from "react";

import classNames from "classnames";

type Props = {
  lable: string;
  id: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  innerRef: any;
  other?: [];
};

const Input = ({
  lable,
  id,
  type = "text",
  placeholder,
  errorMessage,
  innerRef,
  ...other
}: Props) => {
  const errorDescriptionId: string = id + "-error";
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="mb-2 block text-lg font-light">
          {lable}
        </label>

        {errorMessage && (
          <span
            id={errorDescriptionId}
            className="text-sm font-bold text-red-500"
          >
            {errorMessage}
          </span>
        )}
      </div>

      <input
        className={classNames(
          "focus:shadow-outline w-full appearance-none rounded-lg border p-4 leading-tight shadow focus:border-primary-purple focus:outline-none",
          {
            "border-red-500": !!errorMessage,
          }
        )}
        id={id}
        aria-describedby={errorDescriptionId}
        type={type}
        placeholder={placeholder}
        ref={innerRef}
        {...other}
      />
    </div>
  );
};

export default Input;
