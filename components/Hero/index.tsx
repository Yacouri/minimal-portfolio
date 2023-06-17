import Image from "next/image";
import React, { useEffect } from "react";
import EyeIcon from "assets/images/eye.png";
import seoConfig from "seo.json";
import Link from "next/link";
import bluredElipse from "assets/images/blured-elipse.png";
import UpRightIcon from "components/shared/icons/up-right";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "components/shared/components/AnimatexText";

const Hero = () => {
  const placeholderText = [
    { type: "heading1", text: "Transforming visions — Into" },
    { type: "heading1", text: "Visually stunning digital" },
    { type: "heading1", text: "Masterpieces." },
  ];
  const aboutText = [
    { type: "paragraph", text: "Currently working as a Frontend web" },
    { type: "paragraph", text: "Developer & UI/UX Designer at" },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  const spanAnimationObj = {
    hidden: {
      opacity: 0,
      y: "100%",
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 4,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1,
      },
    },
  };
  return (
    <div className="ctr relative section-gap">
      <Image
        src={bluredElipse}
        width={1000}
        height={1000}
        alt="blured eliplse"
        className="animate-pulse absolute -z-10 top-[-100px] left-[100px] w-[200px] md:top-[-50%] md:left-[10%] md:w-full"
      />
      <motion.div
        className="flex items-center gap-3 mt-5"
        initial="hidden"
        animate={"visible"}
        variants={spanAnimationObj}
      >
        <span className="relative p-1 rounded-full shadow-primary bg-primary animate-pulse">
          <span className="absolute top-0 left-0 p-1 rounded-full blur-sm shadow-primary bg-primary"></span>
        </span>
        <p className="font-medium text-secondaryText">
          Available for new projects
        </p>
      </motion.div>
      {/* Currently working at ELBOTOLA Media The #1 Sports app in Morocco. */}

      <motion.div
        className="App"
        initial="hidden"
        // animate="visible"
        animate={"visible"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <div className="w-full mt-10">
        <div className="flex justify-end">
          <div>
            <motion.p
              initial="hidden"
              animate={"visible"}
              variants={spanAnimationObj}
              className="text-sm text-secondaryText text-end md:text-xl"
            >
              Currently working as a Frontend web <br /> Developer & UI/UX
              Designer at{" "}
              <span className="underline text-primary">Elbotola</span>
              <Link
                href="/about"
                className="flex items-center justify-end gap-5 mt-3 text-sm underline text-secondaryText md:text-lg md:mt-6"
              >
                Read more
                <UpRightIcon strokeColor="#fafafa" />
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
