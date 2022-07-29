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

      <div className="container my-12 1024:grid grid-cols-12 gap-5">
        <div className="col-span-8">
          {posts.map(
            ({ title, author, bannerImage, content, createdAt, uid }) => {
              const date = dayjs(createdAt);

              return (
                <Link href={`/our-blog/${uid}`} key={title}>
                  <a className="smooth grid w-full grid-cols-12 overflow-hidden 560:rounded-lg border-b 560:border border-gray-200 bg-white hover:border-secondary-main">
                    <div className="col-span-12 560:col-span-8 880:col-span-6 p-0 pb-6 560:p-6 text-left">
                      <h4>{title}</h4>

                      <p className="mt-3 text-sm font-light text-gray-500 line-clamp-3">
                        {content[0].text}
                      </p>

                      <div className="mt-4 flex gap-2 text-gray-600 text-sm align-middle">
                        <span>By {author.fullName}</span>
                        <span> | </span>
                        <span>
                          {`${months[date.month()]} ${date.get(
                            "d"
                          )}, ${date.get("y")}`}
                        </span>
                      </div>
                    </div>

                    <div className="560:block relative col-span-4 880:col-span-6 hidden h-full">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt={bannerImage.alt}
                        src={bannerImage.url}
                        className="pointer-events-none"
                        priority
                      />
                    </div>
                  </a>
                </Link>
              );
            }
          )}
        </div>
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
