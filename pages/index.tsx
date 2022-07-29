import type { NextPage } from "next";
import { Layout } from "components/primary/Layout";
import { HeroSection } from "components/sections/HeroSection";
import { TouchPointsSection } from "components/sections/TouchPointsSection";
import { RecentPostsSection } from "components/sections/RecentPostsSection";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <TouchPointsSection />
      <RecentPostsSection />
    </Layout>
  );
};

export default Home;
