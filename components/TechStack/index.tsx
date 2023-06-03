import SectionHeader from "components/shared/components/SectionHeader";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { technologies } from "utils";

type TStack = {
  name: string;
  icon: StaticImageData;
};

const TechStack = () => {
  return (
    <div
      className="ctr flex justify-between items-center relative mt-[250px]"
      id="tech-stack"
    >
      <SectionHeader
        title="Tech & Tools"
        caption="As a Frontend Developer here are some of the technologies that I am working with."
      />
      <div className="grid grid-cols-5 gap-3 mt-10">
        {technologies.map(({ name, icon }: TStack) => (
          <div key={name} className="tech-card col-span-1">
            {/* <div className="w-8 h-8"> */}
            <Image
              src={icon.src}
              alt={name}
              width={name == "Figma" ? 25 : 40}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
