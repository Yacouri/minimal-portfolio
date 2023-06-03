import Image from "next/image";
import React from "react";
import EyeIcon from "assets/images/eye.png";
import seoConfig from "seo.json";
import Link from "next/link";
import bluredElipse from "assets/images/blured-elipse.png";
import UpRightIcon from "components/shared/icons/up-right";

const Hero = () => {
  return (
    <div className="ctr relative mt-[250px]">
      <Image
        src={bluredElipse}
        width={1000}
        height={1000}
        alt="blured eliplse"
        className="animate-pulse absolute -z-10 top-[-50%] left-[10%]"
      />
      <div className="flex items-center gap-3 mt-5">
        <span className="relative p-1 shadow-primary bg-primary rounded-full animate-pulse">
          <span className="absolute left-0 top-0 p-1 blur-sm shadow-primary bg-primary rounded-full"></span>
        </span>
        <p className="text-secondaryText font-medium">
          Available for new projects
          {/* Currently working at ELBOTOLA Media The #1 Sports app in Morocco. */}
        </p>
      </div>

      <h1 className="text-primaryText text-[80px] leading-[115%] mt-[30px]">
        Transforming visions — Into <br /> Visually stunning digital
        <br />
        Masterpieces.
      </h1>
      <div className="w-full mt-10">
        <div className="flex justify-end">
          <div>
            <p className="text-secondaryText text-xl text-end">
              Currently working as a Frontend web <br /> Developer & UI/UX
              Designer at{" "}
              <span className="text-primary underline">Elbotola</span>
            </p>
            <Link
              href="/about"
              className="flex gap-5 justify-end items-center text-secondaryText underline text-lg mt-6"
            >
              Read more
              <UpRightIcon strokeColor="#fafafa" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
