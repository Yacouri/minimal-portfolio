import React from "react";

const Footer = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col md:justify-between md:items-center md:flex-row mb-10">
        <h1 className="text-white font-bold text-4xl">
          YZ<span className="text-primary">.</span>
        </h1>
        <p className="text-muted font-semibold">
          Yacouri © 2022, All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-2 md:justify-between md:items-center md:flex-row mb-10">
        <div className="flex gap-10">
          <a href="#tech-stack" className="text-muted font-semibold">
            Skills.
          </a>
          <a href="#work" className="text-muted font-semibold">
            Work.
          </a>
          <a href="#blog" className="text-muted font-semibold">
            Blog.
          </a>
          <a
            href="mailto:co.yacouri@gmail.com"
            className="text-muted font-semibold"
          >
            Contact.
          </a>
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-[#00acee] font-bold">
            Twitter. ◥
          </a>
          <a href="#" className="text-white font-bold">
            Github ◥
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
