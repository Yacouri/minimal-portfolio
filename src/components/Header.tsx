"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [activeLink, setActiveLink] = useState<String>("Home");
  const routes = [
    { name: "Home", path: "/" },
    { name: "Work", path: "#work" },
    { name: "Stack", path: "#stack" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "mailto:hi@yacouri.com" },
  ];

  let translateY = open ? 0 : -1000;
  // const [translateY, setTranslateY] = useState<Number>(-1000);
  return (
    <nav className="relative py-2 mt-4 rounded-xl mx-5 md:mx-0">
      <div className="flex items-center justify-between md:gap-[80px]">
        <div>
          <Link href="/">
            <h1 className="text-white font-semibold text-4xl">
              Yz<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex md:gap-[24px] gap-9">
            {routes.map(({ name, path }, index) => (
              <li key={index} onClick={() => setActiveLink(name)}>
                <Link
                  href={path}
                  className={`nav-link ${
                    name === activeLink && "nav-link--active"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="relative flex flex-col gap-[5px] cursor-pointer md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span
              className={`w-[24px] h-[3px] bg-white ${
                open &&
                "rotate-45 absolute -left-6 top-1/2 -translate-x-1/2 -translate-y-1/2"
              } transition-all `}
            ></span>
            <span
              className={`w-[24px] h-[3px] bg-white ${
                open &&
                "-rotate-45 absolute -left-6 top-1/2 -translate-x-1/2 -translate-y-1/2"
              } transition-all`}
            ></span>
          </div>
        </div>
      </div>
      {/* Burger menu */}
      {open && (
        <ul className={`burger-menu translate-y-[${translateY}px]`}>
          {routes.map(({ name, path }, index) => (
            <li className="" key={index} onClick={() => setOpen(false)}>
              <Link className="text-white text-md" href={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
