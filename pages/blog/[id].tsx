import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getArticleById, getArticles } from "services/article";

interface IParams extends ParsedUrlQuery {
  id: string;
}
const ArticleContent = () => {
  return <div>ArticleContent</div>;
};

export default ArticleContent;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const data = await getArticleById(id);
  return {
    props: data,
  };
};

export const getStaticPaths = async () => {
  const data = await getArticles();
  console.log(22, data[0].slug);

  return {
    paths: data.map((item: TArticle) => `/blog/${item.id}`),
    fallback: false,
  };
};
