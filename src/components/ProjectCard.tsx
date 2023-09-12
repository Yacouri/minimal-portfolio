import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

type ProjectProps = {
  name: string;
  tags: string[];
  url: string;
  img: StaticImageData;
};

const ProjectCard = ({ name, tags, url, img }: ProjectProps) => {
  return (
    <Link href={url} target="_blank" rel="noreferrer">
      <div className="min-h-[172px] flex flex-col justify-between bg-obsi border border-light rounded-lg p-4 transition-all hover:scale-[0.95]">
        <div>
          <Image src={img} alt={"logo"} width={50} height={50} />
        </div>
        <div>
          <h4 className="text-creamy text-lg font-bold ">{name}</h4>
          <p className="text-sm text-secondary uppercase">
            {tags.map((t, index) => (
              <span className="mr-2" key={index}>
                {t} {index != t.length - 1 && "/"}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
