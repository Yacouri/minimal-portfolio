import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [activeLink, setActiveLink] = useState<String>("Home");
  const routes = [
    { name: "Home", path: "/" },
    { name: "Stack", path: "/#Stack" },
    { name: "Blog", path: "/#Blog" },
    { name: "Contact", path: "mailto:co.yacouri@gmail.com" },
  ];

  let translateY = open ? 0 : -1000;
  // const [translateY, setTranslateY] = useState<Number>(-1000);
  return (
    <nav className="relative py-2 mt-4 rounded-xl">
      <div className="flex items-center justify-between md:justify-start md:gap-[100px]">
        <div>
          <Link href="/">
            <h1 className="text-white font-bold text-4xl">
              YZ<span className="text-primary">.</span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex md:gap-[60px] gap-9">
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
            className={`flex flex-col gap-[5px] cursor-pointer md:hidden transition-all ${
              open && "rotate-90"
            }`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="rounded-full w-[24px] h-[3px] bg-white"></span>
            <span className="rounded-full w-[24px] h-[3px] bg-white"></span>
            <span className="rounded-full w-[24px] h-[3px] bg-white"></span>
          </div>
        </div>
      </div>
      {/* Burger menu */}
      {open && (
        <ul
          className={`flex flex-col absolute translate-y-[${translateY}px] transition-all w-full bg-secondary left-0 p-4 rounded-lg gap-5 mt-5 md:hidden`}
        >
          <li>
            <Link href="/#tech-stack" className="nav-link">
              Stack
            </Link>
          </li>
          <li>
            <Link href="/#work" className="nav-link">
              Work
            </Link>
          </li>
          <li>
            <Link href="/#blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li>
            <a href="mailto:co.yacouri@gmail.com" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
