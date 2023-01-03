import React from "react";

type TSectionHeader = {
  title: string;
  caption: string;
};

const SectionHeader = ({ title, caption }: TSectionHeader) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="text-muted mt-2 md:w-1/2">{caption}</p>
    </div>
  );
};

export default SectionHeader;
