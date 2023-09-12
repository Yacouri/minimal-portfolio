import React from "react";
import Stripes from "./Stripes";

type TitleProps = {
  sectionTitle: string;
  caption?: string;
};
const Title = ({ sectionTitle, caption }: TitleProps) => {
  return (
    <div className="mt-[80px]">
      <div className="flex gap-3">
        <div className="mt-2">
          <Stripes />
        </div>
        <div>
          <h2 className="text-creamy font-medium text-[34px]">
            {sectionTitle}
          </h2>
        </div>
      </div>
      {caption && (
        <p className="text-secondary leading-6 ml-[30px]">{caption}</p>
      )}
    </div>
  );
};

export default Title;
