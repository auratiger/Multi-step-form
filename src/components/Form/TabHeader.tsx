import React from "react";

type Props = {
  title: string;
  description: string;
};

const TabHeader = ({ title, description }: Props) => {
  return (
    <header className="mb-8">
      <h1 className="mb-2 text-5xl font-bold leading-relaxed max-md:text-3xl">
        {title}
      </h1>
      <span className="text-xl font-light text-secondary-cool max-md:text-lg">
        {description}
      </span>
    </header>
  );
};

export default TabHeader;
