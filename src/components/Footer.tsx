import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-muted text-center font-medium mt-[80px] mb-[20px] md:mt-[140px] text-base">
        Yacouri © {new Date().getFullYear()}, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
