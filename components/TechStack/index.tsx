import SectionHeader from "components/shared/SectionHeader";
import Image, { StaticImageData } from "next/image";
import bluredElipse from "assets/images/blured-elipse.png";
import React from "react";
import { technologies } from "utils";

type TStack = {
  name: string;
  icon: StaticImageData;
};

const TechStack = () => {
  return (
    <div className="relative mt-[100px]" id="tech-stack">
      {/* <Image
        src={bluredElipse}
        width={400}
        height={400}
        alt="blured eliplse"
        className="absolute -z-10 top-[-50%] left-[-40%]"
      /> */}
      <SectionHeader
        title="Favorite Tech Stack"
        caption="As a Frontend Developer here are some of the technologies that I am working with."
      />
      <div className="flex gap-2 flex-wrap mt-10">
        {technologies.map(({ name, icon }: TStack) => (
          <div
            key={name}
            className="flex gap-4 px-6 py-4 bg-secondary rounded-xl items-center cursor-pointer transition-all hover:translate-y-[-2px]"
          >
            {/* <div className="w-8 h-8"> */}
            <Image
              src={icon.src}
              alt={name}
              width={name == "Figma" ? 15 : 20}
              height={10}
            />
            {/* </div> */}
            <p className="text-white font-medium">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
