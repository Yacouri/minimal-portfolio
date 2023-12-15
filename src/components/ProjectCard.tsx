import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectProps = {
  name: string;
  tags: string[];
  url: string;
  img: StaticImageData;
};

const ProjectCard = ({ name, tags, url, img }: ProjectProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col px-10 pt-10 bg-obsi rounded-md border border-light hover:bg-transparent"
    >
      <div className="flex justify-between mb-4">
        <div>
          <h4 className="text-creamy text-xl font-semibold ">{name}</h4>
          <p className="text-xs text-secondary">
            {tags.map((t, index) => (
              <span className="mr-2" key={index}>
                {t} {index != tags.length - 1 && "/"}
              </span>
            ))}
          </p>
        </div>

        <div className="blog-link">
          <FiArrowUpRight />
        </div>
      </div>
      <Image className="justify-self-end" alt={`${name} Project`} src={img} />
    </Link>
  );
};

export default ProjectCard;
