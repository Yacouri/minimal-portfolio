import React from "react";

type TSectionHeader = {
  title: string;
  caption: string;
};

const SectionHeader = ({ title, caption }: TSectionHeader) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="text-secondaryText mt-2 w-1/3">{caption}</p>
    </div>
  );
};

export default SectionHeader;
