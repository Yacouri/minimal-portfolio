import AnimatedSection from "components/shared/components/AnimatedSection";
import SectionHeader from "components/shared/components/SectionHeader";
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

const Project = ({ title, cover, path, services }: TProject) => {
  return (
    <div>
      <Image
        src={cover}
        width={728}
        height={349}
        alt=""
        className="project-card rounded-[40px] max-w-[300px] md:p-5 p-3 md:max-w-none md:rounded-[58px]"
      />
      <Link
        href={path}
        className="rounded-xl transition-all hover:translate-y-[-2px]"
      >
        <div className="flex justify-center">
          {services.map((service, index) => (
            <p
              className="text-secondaryText text-sm mt-2 md:text-lg"
              key={index}
            >
              {service} {index != services.length - 1 && "/"}
            </p>
          ))}
        </div>
        <h3 className="text-white font-medium text-lg text-center md:text-2xl">
          {title}
        </h3>
      </Link>
    </div>
  );
};

const Work = () => {
  return (
    <AnimatedSection>
      <div className="ctr section-gap" id="work">
        <SectionHeader
          title="Work"
          caption="As someone who love build in public concept, i'am currently working on Bafancy"
        />
      </div>
      <div className="scroll-bar flex overflow-x-scroll gap-5 mt-5 md:mt-150">
        {projects.map((project: TProject, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Work;
