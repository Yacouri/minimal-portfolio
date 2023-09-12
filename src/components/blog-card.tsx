import UpRightArrowIcon from "@/shared/UpRightArrowIcon";
import Link from "next/link";
import React, { FC } from "react";
import { type Doc } from "contentlayer/generated";

const BlogCard: FC<{ blog: Doc }> = ({ blog }) => {
  return (
    <div className="group relative p-4 bg-obsi rounded-lg">
      <span className="text-sm text-secondary font-medium">
        {blog.tags?.map((t, idx) => (
          <span className="mr-1" key={idx}>
            #{t}
          </span>
        ))}
      </span>
      <Link href={`${blog.slug}`}>
        <h2 className="text-creamy text-lg font-bold mt-3">{blog.title}</h2>
      </Link>
      <Link
        href={`${blog.slug}`}
        className="absolute blog-link opacity-0 transition-all group-hover:opacity-100"
      >
        <UpRightArrowIcon />
      </Link>
    </div>
  );
};

export default BlogCard;
