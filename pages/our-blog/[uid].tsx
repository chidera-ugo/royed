import { Layout } from "components/primary/Layout";
import { createClient } from "prismicio";
import { SubNavigation } from "components/primary/SubNavigation";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import dayjs from "dayjs";
import { months } from "utils/months";

const BlogPost = (props: any) => {
  const {
    data: {
      bannerImage,
      title,
      content,
      author: { data: author },
    },
    first_publication_date: createdAt,
  } = props.faq;

  const date = dayjs(createdAt);

  return (
    <Layout title={title}>
      <div className="container">
        <SubNavigation currentRoute={title} />
        <div className="my-8 grid grid-cols-12 gap-5">
          <div className="col-span-8 rich-text">
            <h3 className="text-primary-900">{title}</h3>

            <div className="mt-4 flex gap-2 text-gray-600 text-sm align-middle">
              <span>By {author.fullName}</span>
              <span> | </span>
              <span>
                {`${months[date.month()]} ${date.get("d")}, ${date.get("y")}`}
              </span>
            </div>

            <div className="relative block h-[320px] w-full my-8">
              <Image
                layout="fill"
                objectFit="cover"
                alt={bannerImage.alt}
                src={bannerImage.url}
                className="rounded-xl"
                priority
              />
            </div>

            <div className="text-justify">
              <PrismicRichText field={content} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths({ previewData }: any) {
  const client = createClient({ previewData });

  const posts = await client.getAllByType("blog_post");

  const paths = posts.map((post) => ({
    params: { uid: post.uid },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ previewData, params }: any) {
  const client = createClient({ previewData });

  const faq = await client.getByUID("blog_post", params.uid, {
    fetchLinks: ["author.fullName"],
  });

  return {
    props: { faq },
  };
}

export default BlogPost;
