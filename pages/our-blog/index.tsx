import { Layout } from "components/primary/Layout";
import { PageHeader } from "components/modules/PageHeader";
import { createClient } from "prismicio";
import dayjs from "dayjs";
import Image from "next/image";
import { months } from "utils/months";
import Link from "next/link";
import { usePosts } from "hooks/usePosts";

const OurBlog = (props: any) => {
  const { posts } = usePosts(props.posts);

  return (
    <Layout title="Our Blog">
      <PageHeader
        title="Our Blog"
        subTitle="Keep up to date with our latest stories, studies and projects"
      />

      <div className="container my-12 1024:max-w-[1024px]">
        {posts.map(
          ({ title, author, bannerImage, content, createdAt, uid }) => {
            const date = dayjs(createdAt);

            return (
              <Link href={`/our-blog/${uid}`} key={title}>
                <a className="smooth group 640:grid w-full grid-cols-12 gap-6 py-3 overflow-hidden bg-white">
                  <div className="560:block relative col-span-5 h-44 640:h-full">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt={bannerImage.alt}
                      src={bannerImage.url}
                      priority
                    />
                  </div>

                  <div className="col-span-7 640:mt-0 mt-4 text-left">
                    <h4 className="text-2xl 640:text-3xl text-gray-800 group-hover:text-primary-main smooth">
                      {title}
                    </h4>

                    <p className="mt-4 text-sm font-light text-gray-500 line-clamp-2">
                      {content[0].text}
                    </p>

                    <div className="mt-4 flex gap-2 text-gray-600 text-xs align-middle">
                      <span>By {author.fullName}</span>
                      <span> | </span>
                      <span>
                        {`${months[date.month()]} ${date.get("d")}, ${date.get(
                          "y"
                        )}`}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            );
          }
        )}
      </div>
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

export default OurBlog;
