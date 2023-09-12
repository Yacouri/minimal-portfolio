"use client";
import React, { FC } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

type BlogContentProps = {
  code: string;
};

const BlogContent: FC<BlogContentProps> = ({ code }) => {
  const MDXContent = useMDXComponent(code);

  return <MDXContent />;
};

export default BlogContent;
