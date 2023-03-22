import SectionHeader from "components/shared/SectionHeader";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { technologies, projects } from "utils";

type TProject = {
  name: string;
  cover: string;
  stack: string[];
  caption: string;
  url: string;
};

const Project = (props: TProject) => {
  const { name, stack, caption, cover, url } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="p-5 bg-secondary rounded-xl md:w-full transition-all hover:translate-y-[-2px]"
    >
      <Image src={cover} width={628} height={249} alt="" />
      <div className="flex gap-2 mt-2">
        {stack.map((tech, index) => (
          <div
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#0F1319] rounded-lg"
            key={index}
          >
            <Image
              src={
                technologies.find(({ name }) => name == tech)
                  ?.icon as StaticImageData
              }
              alt={tech}
              width={20}
              height={20}
            />
          </div>
        ))}
      </div>
      <h3 className="text-white font-bold text-2xl mt-2">{name}</h3>
      <p className="text-muted mt-2">{caption}</p>
    </a>
  );
};

const Work = () => {
  return (
    <div className="mt-[100px]" id="work">
      <SectionHeader
        title="Check out what I'm working on."
        caption="As someone who love build in public concept, i'am currently working on Bafancy"
      />
      <div className="flex flex-col gap-2 md:flex-row mt-10">
        {projects.map((project: TProject, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Work;
