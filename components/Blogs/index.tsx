import SectionHeader from "components/shared/SectionHeader";
import React from "react";
import b1 from "assets/images/b1.png";
import b2 from "assets/images/b2.png";
import Image from "next/image";
import Link from "next/link";
import Tag from "components/shared/Tag";

const Blog = (props: TArticle) => {
  const {
    id,
    social_image,
    title,
    description,
    slug,
    reading_time_minutes,
    readable_publish_date,
    tag_list,
  } = props;

  return (
    <Link href={`/blog/${id}/${slug}`}>
      <div className="p-5 bg-secondary rounded-xl">
        {/* <div className="flex items-center">
          <Image
            src={social_image}
            width={150}
            height={200}
            className="w-full md:w-fit my-auto"
            alt=""
          />
        </div> */}
        <div className="">
          <div className="flex justify-between mb-2">
            <div className="flex gap-1">
              {tag_list.map((tag, index) => (
                <Tag label={tag} key={index} />
              ))}
            </div>
            <p className="text-muted mb-3">{reading_time_minutes} mins read</p>
          </div>
          <h1 className="text-white font-bold text-xl">{title}</h1>
          <p className="text-muted font-medium">{description}</p>
          {/* <Link className="text-primary" href={slug}>
            Read ◥
          </Link> */}
        </div>
      </div>
    </Link>
  );
};

const Blogs = ({ articles }: TArticles) => {
  return (
    <div className="mt-[100px]" id="blog">
      <SectionHeader
        title="Blog"
        caption="Sometimes i write articles about, Tech tutorials, Design and sharing my thoughts..."
      />
      <div className="flex flex-col gap-3 mt-10">
        {articles?.map((article, index) => (
          <Blog {...article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
