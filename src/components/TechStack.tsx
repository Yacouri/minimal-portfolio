import { technologies } from "@/utils/stack";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Title from "./Title";

type TStack = {
  name: string;
  icon: StaticImageData;
};

export const TechStack = () => {
  return (
    <div id="stack">
      <Title
        sectionTitle="Tech & Tools"
        caption="As a Frontend Developer here are some
        of the technologies that I am working with."
      />
      <div className="grid grid-cols-4 gap-3 mt-10 p-5 md:grid-cols-9 md:p-0">
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
  );
};
