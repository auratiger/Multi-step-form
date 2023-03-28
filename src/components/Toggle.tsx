import React, { useState } from "react";

import classNames from "classnames";

type Props = {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: any, newChecked: boolean) => void;
};

const Toggle = ({ checked = false, disabled = false, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleOnChange = (e: any) => {
    e.preventDefault();
    if (disabled) return;

    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(e, newChecked);
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={isChecked}
        readOnly
      />
      <div
        onClick={handleOnChange}
        className={classNames(
          "peer h-[1.6rem] w-[2.86rem] rounded-full after:absolute after:top-[0.24rem] after:left-[3px] after:aspect-square after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800",
          disabled ? "bg-red-200" : "bg-primary-marine"
        )}
      ></div>
    </label>
  );
};

export default Toggle;
