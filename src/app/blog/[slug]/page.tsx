import React, { FC } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import BlogContent from "@/components/blog-content";

type BlogProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const doc = allDocs.find((doc) => doc.slugAsParams === params.slug);
  if (!doc) {
    return {
      title: "Not Found",
      description:
        "Oups! The page you are looking for does not exist for this article.",
    };
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();
  return doc;
}

const SingleBlog: FC<BlogProps> = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);

  return (
    <div className="px-4 mt-[100px]">
      <h1 className="text-white text-4xl font-bold">{doc?.title}</h1>
      <div className="prose prose-invert md:prose-lg">
        <BlogContent code={doc.body.code} />
      </div>
    </div>
  );
};

export default SingleBlog;
