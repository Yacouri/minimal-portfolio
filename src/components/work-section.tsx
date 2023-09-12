import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import minatempsLogo from "@/images/minatemps-logo.png";
import bafancyLogo from "@/images/bafancy-logo.png";

const WorkSection = () => {
  const projects = [
    {
      name: "Minatemps",
      tags: ["Ui Design", "Development"],
      url: "https://minatemps.netlify.app/",
      img: minatempsLogo,
    },
    {
      name: "Bafancy",
      tags: ["Ui Design", "Development"],
      url: "https://bafancy.com/",
      img: bafancyLogo,
    },
  ];
  return (
    <div>
      <Title
        sectionTitle="Work"
        caption="Some of the applications and companies I've dedicated my time to."
      />
      <div className="grid grid-cols-1 gap-[10px] mt-10 p-5 md:grid-cols-2 md:p-0">
        {projects.map((p, index) => (
          <ProjectCard {...p} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
