import React from "react";

type IconProps = {
  classes?: string;
  fill?: string | "none";
  strokeColor?: string | "none";
};

export default function UpRightIcon({ classes, fill, strokeColor }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M17 7L7 17M17 7H8M17 7V16"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
