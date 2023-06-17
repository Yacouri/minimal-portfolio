import React, { Component, FC, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

type AnimatedSectionType = {
  children: ReactNode;
};

// Apply reveal animation when a component is wrapped by this HOC
const AnimatedSection = ({ children }: AnimatedSectionType) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
