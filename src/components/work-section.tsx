import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import minatempsWeb from "@/images/Minatemps-web.png";
import naturaWeb from "@/images/Natura-web.png";
// import naturaMobile from "@/images/Natura-mobile.png";
import _3drWeb from "@/images/3DR-web.png";
import bafancyWeb from "@/images/Bafancy-web.png";
import KuuCoinWeb from "@/images/KuuCoin-web.png";

const WorkSection = () => {
  const projects = [
    {
      name: "Natura (Web)",
      tags: ["UI & UX Design"],
      url: "https://dribbble.com/shots/23203922-Natura-Cosmetic-products-Landing-page",
      img: naturaWeb,
    },
    {
      name: "3DR",
      tags: ["UI & UX Design"],
      url: "https://dribbble.com/shots/23204039-3DR-Hero-Section",
      img: _3drWeb,
    },
    {
      name: "Bafancy",
      tags: ["UI & UX Design", "Website Development"],
      url: "https://bafancy.vercel.app/",
      img: bafancyWeb,
    },
    {
      name: "Kuu Coin",
      tags: ["UI & UX Design"],
      url: "#",
      img: KuuCoinWeb,
    },
    {
      name: "Minatemps",
      tags: ["UI & UX Design", "Website Development"],
      url: "https://minatemps.vercel.app/",
      img: minatempsWeb,
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
