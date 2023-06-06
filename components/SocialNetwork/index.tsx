import SectionHeader from "components/shared/components/SectionHeader";
import Link from "next/link";
import React from "react";
import seo from "seo.json";

export default function SocialNetworks() {
  const { handles } = seo;
  const socials = [
    { name: "Twitter", url: `https://twitter.com/${handles.twitter}` },
    { name: "Behance", url: `https://behance.net/${handles.behance}` },
    { name: "Dribbble", url: `https://dribbble.com/${handles.dribbble}` },
    { name: "Instagram", url: `https://instagram.com/${handles.instagram}` },
    { name: "Github", url: `https://github.com/${handles.github}` },
  ];
  const mapSocials = socials.map(({ name, url }, index) => (
    <Link href={url} target="_blank" rel="noreferrer" key={index}>
      <span className="text-[100px] text-secondaryText mx-20">◤{name}</span>
    </Link>
  ));

  return (
    <div>
      <div className="ctr mt-[250px]">
        <SectionHeader title="Social Network" />
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {mapSocials}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          {mapSocials}
        </div>
      </div>
    </div>
  );
}
