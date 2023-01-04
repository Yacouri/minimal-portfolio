import SectionHeader from "components/shared/SectionHeader";
import React from "react";
import b1 from "assets/images/b1.png";
import b2 from "assets/images/b2.png";
import Image from "next/image";

const Blog = (props: TArticle) => {
  return (
    <div className="p-5 flex flex-col items-top gap-4 bg-secondary rounded-xl md:flex-row">
      <Image
        src={props.social_image}
        width={176}
        height={140}
        className="w-full md:w-fit"
        alt=""
      />
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-primary font-semibold text-lg">
            {props.readable_publish_date}
          </p>
          <p className="text-primary font-semibold text-lg">
            {props.reading_time_minutes} mins
          </p>
        </div>
        <div>
          <h1 className="text-white font-bold text-2xl mt-2">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

const Blogs = ({ articles }: TArticles) => {
  return (
    <div className="mt-[100px]">
      <SectionHeader
        title="Blog"
        caption="Take a look at some of the applications, articles, and companies I've dedicated my time to."
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
