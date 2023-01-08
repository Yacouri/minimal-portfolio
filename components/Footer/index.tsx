import Link from "next/link";
import React from "react";
import seoConfig from "seo.json";

const Footer = () => {
  const {
    handles: { twitter, behance, github, dribbble },
  } = seoConfig;
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
          <Link href="/#tech-stack" className="text-muted font-semibold">
            Skills.
          </Link>
          <Link href="/#work" className="text-muted font-semibold">
            Work.
          </Link>
          <Link href="/#blog" className="text-muted font-semibold">
            Blog.
          </Link>
          <a
            href="mailto:co.yacouri@gmail.com"
            className="text-muted font-semibold"
          >
            Contact.
          </a>
        </div>
        <div className="flex gap-10">
          <a
            href={`https://behance.net/${behance}`}
            className="text-[#053eff] font-bold"
          >
            Be. ◥
          </a>
          <a
            href={`https://twitter.com/${twitter}`}
            className="text-[#00acee] font-bold"
          >
            Tw. ◥
          </a>
          <a
            href={`https://dribbble.com/${dribbble}`}
            className="text-[#ea4c89] font-bold"
          >
            Dr. ◥
          </a>
          <a
            href={`https://github.com/${github}`}
            className="text-white font-bold"
          >
            Gh. ◥
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
