import React from "react";

type Props = {
  title: string;
  description: string;
};

const TabHeader = ({ title, description }: Props) => {
  return (
    <header className="mb-8">
      <h1 className="text-5xl font-bold leading-relaxed">{title}</h1>
      <span className="text-xl font-light text-secondary-cool">
        {description}
      </span>
    </header>
  );
};

export default TabHeader;
