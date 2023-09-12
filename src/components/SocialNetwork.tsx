import React from "react";
import Title from "./Title";
import LinkButton from "./link-button";
import GithubIcon from "@/shared/GithubIcon";
import BehanceIcon from "@/shared/BehanceIcon";
import DribbbleIcon from "@/shared/DribbbleIcon";
import TwitterIcon from "@/shared/TwitterIcon";

const SocialNetwork = () => {
  return (
    <div>
      <Title sectionTitle="Social Network" />
      <div className="grid grid-cols-2 gap-3 p-5 mt-0 md:mt-[25px] md:grid-cols-4 md:p-0">
        <LinkButton
          url="https://github.com/Yacouri"
          label="Github"
          icon={<GithubIcon />}
        />
        <LinkButton
          url="https://twitter.com/zyacouri"
          label="Twitter (X)"
          icon={<TwitterIcon />}
        />
        <LinkButton
          url="https://dribbble.com/yacouri"
          label="Dribbble"
          icon={<DribbbleIcon />}
        />
        <LinkButton
          url="https://www.behance.net/zouhiryacouri"
          label="Behance"
          icon={<BehanceIcon />}
        />
      </div>
    </div>
  );
};

export default SocialNetwork;
