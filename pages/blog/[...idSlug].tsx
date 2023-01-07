import Tag from "components/shared/Tag";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getArticleById, getArticles } from "services/article";

interface IParams extends ParsedUrlQuery {
  idSlug: string[];
}
const ArticleContent = (props: TArticleContent) => {
  const { title, body_html, reading_time_minutes, tags } = props;
  return (
    <div className="mt-[100px]">
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <Tag label={tag} key={index} bgColor="bg-secondary" />
        ))}
      </div>
      <h1 className="text-white text-4xl font-bold">{title}</h1>
      <p className="text-primary mt-3">{reading_time_minutes} minutes read</p>
      <div
        dangerouslySetInnerHTML={{ __html: body_html }}
        className="mt-10 prose md:prose-lg md:prose-invert"
      />
    </div>
  );
};

export default ArticleContent;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { idSlug } = params as IParams;
  const data = await getArticleById(idSlug[0]);

  return {
    props: data,
  };
};

export const getStaticPaths = async () => {
  const data = await getArticles();

  return {
    paths: data.map((item: TArticle) => `/blog/${item.id}/${item.slug}`),
    fallback: false,
  };
};
