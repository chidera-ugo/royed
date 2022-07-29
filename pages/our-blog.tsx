import type { NextPage } from "next";
import { Layout } from "components/primary/Layout";
import { PageHeader } from "../components/modules/PageHeader";
import { createClient } from "prismicio";
import dayjs from "dayjs";
import Image from "next/image";
import { months } from "utils/months";
import Link from "next/link";

const OurBlog: NextPage = (props: any) => {
  const posts = (props.posts as any[]).map(
    ({
      first_publication_date,
      uid,
      data: {
        title,
        content,
        bannerImage: { url, alt },
        author: {
          slug,
          data: { fullName },
        },
      },
    }) => {
      return {
        createdAt: first_publication_date,
        uid,
        title,
        content,
        bannerImage: {
          url,
          alt,
        },
        author: {
          slug,
          fullName,
        },
      };
    }
  );

  return (
    <Layout title="Our Blog">
      <PageHeader
        title="Our Blog"
        subTitle="Keep up to date with our latest stories, studies and projects"
      />

      <div className="container my-12 grid grid-cols-12 gap-5">
        <div className="col-span-8">
          {posts.map(
            ({ title, author, bannerImage, content, createdAt, uid }) => {
              const date = dayjs(createdAt);

              return (
                <Link href={`/our-blog/${uid}`} key={title}>
                  <a className="smooth grid w-full grid-cols-12 overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-secondary-main">
                    <div className="col-span-6 p-8 text-left">
                      <h4>{title}</h4>

                      <p className="mt-3 text-sm font-light text-gray-500 line-clamp-4">
                        {content[0].text}
                      </p>

                      <div className="flex align-middle">{}</div>

                      <div className="mt-4 flex gap-2 align-middle">
                        <div className="green-pill">
                          <span>
                            {`${months[date.month()]} ${date.get(
                              "d"
                            )}, ${date.get("y")}`}
                          </span>
                        </div>

                        <div className="green-pill">{author.fullName}</div>
                      </div>
                    </div>

                    <div className="relative col-span-6 block h-full">
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

  // <PrismicRichText field={answer} />
  // const faq = await client.getByUID('frequently_asked_question', params.uid, {
  //   fetchLinks: ['frequently_asked_question_group.title'],
  // });

  const posts = await client.getAllByType("blog_post", {
    fetchLinks: ["author.fullName"],
  });

  return {
    props: { posts },
  };
}

export default OurBlog;
