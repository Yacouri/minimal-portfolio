import AnimatedSection from "components/shared/components/AnimatedSection";
import UpRightIcon from "components/shared/icons/up-right";
import Link from "next/link";
import React from "react";
import seo from "seo.json";

type Props = {};

export default function Contact({}: Props) {
  return (
    <AnimatedSection>
      <div className="ctr mt-[250px]">
        <div className="contact-card">
          <div className="bg-primary p-10 rounded-[38px]">
            <div className="mb-[150px]">
              <p className="text-black text-8xl">Have an idea?</p>
              <p className="text-black text-8xl">Let&apos;s make it</p>
            </div>
            <div className="flex-col md:flex justify-between items-baseline">
              <Link
                href={`mailto:${seo.email}`}
                className="underline font-semibold text-xl"
              >
                {seo.email}
              </Link>
              <Link
                href={`mailto:${seo.email}`}
                className="flex gap-4 items-center underline text-6xl"
              >
                Contact
                {/* <UpRightIcon strokeColor="#0A0C0F" /> */}
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
