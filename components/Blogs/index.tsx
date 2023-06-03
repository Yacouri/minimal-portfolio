import SectionHeader from "components/shared/components/SectionHeader";
import React from "react";
import b1 from "assets/images/b1.png";
import b2 from "assets/images/b2.png";
import Image from "next/image";
import Link from "next/link";
import Tag from "components/shared/components/Tag";
import UpRightIcon from "components/shared/icons/up-right";

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
      <div className="blog-card">
        <div className="">
          <div className="flex justify-between items-center">
            <h1 className="text-secondaryText text-4xl">{title}</h1>
            <UpRightIcon strokeColor="#fafafa" />
          </div>
          {/* <p className="text-primaryText font-medium">{description}</p> */}
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
    <div className="ctr mt-[250px]" id="blog">
      <SectionHeader
        title="Blog"
        caption="Sometimes i write articles about, Tech tutorials, Design and sharing my thoughts..."
      />
      <div className="flex flex-col gap-3 mt-150">
        {articles?.map((article, index) => (
          <Blog {...article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
