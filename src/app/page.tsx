import Blog from "@/components/Blog";
import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import SocialNetwork from "@/components/SocialNetwork";
import { TechStack } from "@/components/TechStack";
import WorkSection from "@/components/work-section";

export default function Home() {
  return (
    <div className="mt-[110px]">
      <Hero />
      <WorkSection />
      <TechStack />
      <Blog />
      <SocialNetwork />
      <Contact />
    </div>
  );
}
