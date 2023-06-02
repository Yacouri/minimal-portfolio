import SectionHeader from "components/shared/SectionHeader";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { technologies, projects } from "utils";

type TProject = {
  title: string;
  cover: string;
  url: string | "";
  path: string;
  services: string[];
};

const Project = (props: TProject) => {
  const { title, cover, path, services } = props;
  return (
    <div>
      <Image
        src={cover}
        width={628}
        height={249}
        alt=""
        className="project-card rounded-[58px] p-5"
      />
      <Link
        href={path}
        className="rounded-xl transition-all hover:translate-y-[-2px]"
      >
        {/* <div className="flex gap-2 mt-2">
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
      </div> */}
        <div className="flex justify-center">
          {services.map((service, index) => (
            <p className="text-secondaryText text-lg mt-2" key={index}>
              {service} {index != services.length - 1 && "/"}
            </p>
          ))}
        </div>
        <h3 className="text-white font-medium text-2xl text-center">{title}</h3>
      </Link>
    </div>
  );
};

const Work = () => {
  return (
    <>
      <div className="ctr mt-[100px]" id="work">
        <SectionHeader
          title="Work"
          caption="As someone who love build in public concept, i'am currently working on Bafancy"
        />
      </div>
      <div className="scroll-bar flex">
        {projects.map((project: TProject, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </>
  );
};

export default Work;
