"use client";

import React, { FC } from "react";
import { type Doc } from "contentlayer/generated";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const BlogCard: FC<{ blog: Doc }> = ({ blog }) => {
  const router = useRouter();
  return (
    <div
      className="relative p-4 bg-obsi rounded-lg border border-light cursor-pointer transition-all hover:bg-transparent"
      onClick={() => router.push(blog.slug)}
    >
      <span className="text-xs text-secondary font-medium">
        {blog.tags?.map((t, idx) => (
          <span
            className="bg-chip py-[5px] px-[10px] rounded-full mr-1"
            key={idx}
          >
            {t}
          </span>
        ))}
      </span>
      <h2 className="text-creamy text-xl font-medium mt-3">{blog.title}</h2>
      <div className="flex items-center gap-1 text-xs text-accent mt-6">
        <p>Read more</p>
        <FiArrowUpRight />
      </div>
      {/* </Link> */}
    </div>
  );
};

export default BlogCard;
