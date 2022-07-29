
import type { NextPage } from "next";
import { Layout } from "components/primary/Layout";
import { PageHeader } from "../components/modules/PageHeader";

const OurBlog: NextPage = () => {
  return (
    <Layout title="Our Blog">
      <PageHeader
        title="Our Blog"
        subTitle="Keep up to date with our latest stories, studies and projects"
      />

      <div className="container my-12 max-w-[900px]"></div>
    </Layout>
  );
};

export default OurBlog;
