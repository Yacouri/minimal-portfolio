import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  url: string;
  label: string;
  icon: ReactNode;
};

const LinkButton = ({ url, icon, label }: ButtonProps) => {
  return (
    <div>
      <Link href={url} className="link-button">
        {icon}
        <span className="text-lg">{label}</span>
      </Link>
    </div>
  );
};

export default LinkButton;
