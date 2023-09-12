import React from "react";
import Title from "./Title";
import BlogCard from "./blog-card";
import { allDocs } from "contentlayer/generated";

const Blog = () => {
  const doc = allDocs;
  return (
    <div>
      <Title
        sectionTitle="Blog"
        caption="Sometimes i write articles about, Tech tutorials,
        Design and sharing my thoughts..."
      />
      <div className="grid grid-cols-1 gap-[10px] mt-10 p-5 md:grid-cols-2 md:p-0 ">
        {doc.map((b, idx) => (
          <BlogCard key={idx} blog={b} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
