import React from "react";

type TSectionHeader = {
  title: string;
  caption?: string;
  customWidth?: boolean;
};

const SectionHeader = ({ title, caption, customWidth }: TSectionHeader) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <p
        className={`text-secondaryText mt-2 w-full ${
          customWidth ? "md:w-[55%]" : "md:w-[30%]"
        }`}
      >
        {caption}
      </p>
    </div>
  );
};

export default SectionHeader;
