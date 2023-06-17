import AnimatedSection from "components/shared/components/AnimatedSection";
import UpRightIcon from "components/shared/icons/up-right";
import Link from "next/link";
import React from "react";
import seo from "seo.json";

type Props = {};

export default function Contact({}: Props) {
  return (
    <AnimatedSection>
      <div className="ctr section-gap">
        <div className="contact-card">
          <div className="bg-primary p-8 md:p-10 rounded-[38px]">
            <div className="mb-[100px] md:mb-[150px]">
              <p className="text-black text-3xl md:text-8xl">Have an idea?</p>
              <p className="text-black text-3xl md:text-8xl">
                Let&apos;s make it
              </p>
            </div>
            <div className="flex-col justify-between items-baseline md:flex-row md:flex">
              <Link
                href={`mailto:${seo.email}`}
                className="underline font-semibold text-xl"
              >
                {seo.email}
              </Link>
              <Link
                href={`mailto:${seo.email}`}
                className="hidden md:gap-4 md:items-center md:underline text-2xl md:text-6xl md:flex"
              >
                Contact
                {/* <UpRightIcon strokeColor="#0A0C0F" /> */}
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 md:w-10"
                >
                  <rect
                    x="14"
                    y="41.1631"
                    width="40"
                    height="6"
                    transform="rotate(-45 14.293 41.1631)"
                    fill="#0A0C0F"
                  />
                  <path
                    d="M15 15L45 15L45 45"
                    stroke="#0A0C0F"
                    stroke-width="6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
