import React from "react";

const StepperItem = ({ step, onSelect, children, ...other }) => {
  return <div {...other}>{children}</div>;
};

export default StepperItem;
