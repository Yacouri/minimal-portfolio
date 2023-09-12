import MailIcon from "@/shared/MailIcon";
import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <div className="md:mt-[130px] mt-[100px]">
      <h1 className="relative text-creamy text-4xl md:mb-0 mb-10 md:text-6xl text-center font-medium">
        Have an idea? <br />
        Let&apos;s <span className="underlined">connect.</span>
      </h1>
      <Link href="mailto:hi@yacouri.com" className="w-fit mx-auto link-button">
        <MailIcon />
        hi@yacouri.com
      </Link>
    </div>
  );
};
