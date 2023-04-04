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
        <label htmlFor={id} className="mb-2 block font-light">
          {lable}
        </label>

        {errorMessage && (
          <small
            id={errorDescriptionId}
            className="font-bold text-secondary-strawberry"
          >
            {errorMessage}
          </small>
        )}
      </div>

      <input
        className={classNames(
          "focus:shadow-outline w-full appearance-none rounded-lg border p-4 leading-tight shadow focus:border-primary-purple focus:outline-none",
          {
            "border-secondary-strawberry": !!errorMessage,
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
