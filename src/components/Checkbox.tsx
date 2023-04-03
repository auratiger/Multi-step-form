import React from "react";

type Props = {
  checked?: boolean;
  disabled?: boolean;
  focusable?: boolean;
  onChange?: (e: any) => void;
};

const Checkbox = ({ checked, focusable, disabled, onChange }: Props) => {
  return (
    <input
      id="checkbox"
      type="checkbox"
      value=""
      aria-checked={checked}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      tabIndex={!focusable && -1}
      className="aspect-square w-5 rounded-lg border-gray-300 bg-gray-100 text-blue-600 focus:outline-8 focus:outline-offset-0 focus:outline-blue-500"
    />
  );
};

export default Checkbox;
