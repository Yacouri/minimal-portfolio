import Blogs from "components/Blogs";
import Hero from "components/Hero";
import TechStack from "components/TechStack";
import Work from "components/Work";
import { getArticles } from "services/article";

export default function Home({ articles }: TArticles) {
  return (
    <>
      {/* <Hero /> */}
      {/* <TechStack /> */}
      <Work />
      {/* <Blogs articles={articles} /> */}
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: { articles: await getArticles() },
  };
};
