import Image from "next/image";
import React from "react";
import EyeIcon from "assets/images/eye.png";
import seoConfig from "seo.json";

const Hero = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-primary text-6xl font-semibold">Yacouri Zouhir</h1>
      <h2 className="title mt-2">Frontend Developer & Ui/Ux Designer</h2>
      <div className="flex items-center gap-3 mt-5">
        <span className="relative p-1 shadow-primary bg-primary rounded-full animate-pulse">
          <span className="absolute left-0 top-0 p-1 blur-sm shadow-primary bg-primary rounded-full "></span>
        </span>
        <p className="text-muted font-medium">
          Working as a Frontend Web Developer & Ui/UX Designer at ELBOTOLA
        </p>
      </div>
      <div className="mt-10">
        <a
          href={seoConfig.resume_url}
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 px-6 py-3 bg-secondary rounded-xl w-fit"
        >
          <Image src={EyeIcon.src} width={20} height={20} alt="Eye icon" />
          <p className="font-medium text-white">View Resume</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
