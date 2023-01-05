import SectionHeader from "components/shared/SectionHeader";
import Image from "next/image";
import React from "react";
import p1 from "assets/images/p1.png";
import p2 from "assets/images/p2.png";

const Work = () => {
  return (
    <div className="mt-[100px]" id="work">
      <SectionHeader
        title="Work"
        caption="Take a look at some of the applications, articles, and companies I've dedicated my time to."
      />
      <div className="flex flex-col gap-2 md:flex-row mt-10">
        <div className="p-5 bg-secondary rounded-xl">
          <Image src={p1.src} width={314} height={249} alt="" />
          <h3 className="text-white font-bold text-2xl mt-5 md:text-center">
            Bafancy Editor
          </h3>
        </div>
        <div className="p-5 bg-secondary rounded-xl">
          <Image src={p2.src} width={314} height={249} alt="" />
          <h3 className="text-white font-bold text-2xl mt-5 md:text-center">
            Old Portfolio
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Work;
