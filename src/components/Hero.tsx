import React from "react";

const Hero = () => {
  return (
    <div className="md:p-0 p-5">
      <h1 className="text-creamy text-4xl font-bold">
        Hello, I&apos;m Zouhir Yacouri
      </h1>
      <p className="text-creamy text-base font-medium mt-[30px] leading-7">
        Working as a Frontend Developer & Ui/UX Designer at
        <span className="px-2 py-[5px] bg-obsi ml-1 border-[1px] border-light rounded-md">
          ⚽ Elbotola
        </span>{" "}
        learning new concepts,
        <br />
        Solving problems, Enhance the UI & Improving the user experience.
      </p>
    </div>
  );
};

export default Hero;
