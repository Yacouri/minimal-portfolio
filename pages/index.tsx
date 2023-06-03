import Blogs from "components/Blogs";
import Contact from "components/Contact";
import Hero from "components/Hero";
import SocialNetworks from "components/SocialNetwork";
import TechStack from "components/TechStack";
import Work from "components/Work";
import { getArticles } from "services/article";

export default function Home({ articles }: TArticles) {
  return (
    <>
      <Hero />
      <Work />
      <TechStack />
      <Blogs articles={articles} />
      <SocialNetworks />
      <Contact />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: { articles: await getArticles() },
  };
};
