import SectionHeader from "components/shared/components/SectionHeader";
import React from "react";
import b1 from "assets/images/b1.png";
import b2 from "assets/images/b2.png";
import Image from "next/image";
import Link from "next/link";
import Tag from "components/shared/components/Tag";
import UpRightIcon from "components/shared/icons/up-right";
import AnimatedSection from "components/shared/components/AnimatedSection";

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
          <div className="flex flex-col md:justify-between md:items-center">
            <h1 className="text-secondaryText text-xl md:text-4xl">{title}</h1>
            <UpRightIcon strokeColor="#fafafa" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blogs = ({ articles }: TArticles) => {
  return (
    <AnimatedSection>
      <div className="ctr section-gap" id="blog">
        <SectionHeader
          title="Blog"
          caption="Sometimes i write articles about, Tech tutorials, Design and sharing my thoughts..."
        />
        <div className="flex flex-col gap-3 mt-5 md:mt-150">
          {articles?.map((article, index) => (
            <Blog {...article} key={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Blogs;
