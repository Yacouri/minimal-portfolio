import AnimatedSection from "components/shared/components/AnimatedSection";
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
    <AnimatedSection>
      <div
        className="ctr flex flex-col justify-between items-center relative section-gap md:flex-row"
        id="tech-stack"
      >
        <SectionHeader
          title="Tech & Tools"
          caption="As a Frontend Developer here are some of the technologies that I am working with."
          customWidth={true}
        />
        <div className="grid grid-cols-4 gap-3 mt-10 md:grid-cols-5">
          {technologies.map(({ name, icon }: TStack) => (
            <div key={name} className="col-span-1 tech-card">
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
    </AnimatedSection>
  );
};

export default TechStack;
