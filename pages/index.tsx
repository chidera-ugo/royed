import { Layout } from "components/primary/Layout";
import { HeroSection } from "components/sections/HeroSection";
import { TouchPointsSection } from "components/sections/TouchPointsSection";
import { FeaturedPostsSection } from "components/sections/FeaturedPostsSection";
import { usePosts } from "hooks/usePosts";
import { createClient } from "prismicio";

const Home = (props: any) => {
  const { posts } = usePosts(props.posts);

  return (
    <Layout>
      <HeroSection />
      <TouchPointsSection />
      <FeaturedPostsSection posts={posts} />
    </Layout>
  );
};

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const posts = await client.getAllByType("blog_post", {
    fetchLinks: ["author.fullName"],
  });

  return {
    props: { posts },
  };
}

export default Home;
