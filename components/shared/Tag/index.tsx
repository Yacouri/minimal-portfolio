import React from "react";

type TLabel = {
  label: string;
  bgColor?: string;
};

const Tag = ({ label, bgColor }: TLabel) => {
  return (
    <p
      className={`text-white px-3 py-1 ${
        bgColor ? bgColor : "bg-[#0F1319]/70"
      } rounded-md mb-3`}
    >
      {label}
    </p>
  );
};

export default Tag;
