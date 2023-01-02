import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);
  let translateY = open ? 0 : -1000;
  // const [translateY, setTranslateY] = useState<Number>(-1000);
  return (
    <nav className=" relative px-5 py-2 mt-4 bg-secondary rounded-xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-white font-semibold text-4xl">
            YZ<span className="text-primary">.</span>
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex gap-9">
            <li>
              <a href="#" className="nav-link">
                Home.
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Stack
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
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
            <a href="#" className="nav-link">
              Home.
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Stack
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
