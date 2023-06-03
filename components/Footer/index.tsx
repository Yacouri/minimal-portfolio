import React from "react";

const Footer = () => {
  return (
    <div className="my-[50px]">
      <p className="text-primaryText text-center">
        Yacouri © {new Date().getFullYear()}, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
