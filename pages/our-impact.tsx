import type { NextPage } from "next";
import { Layout } from "components/primary/Layout";
import { PageHeader } from "components/modules/PageHeader";

const OurImpact: NextPage = () => {
  return (
    <Layout title="Our Impact">
        <PageHeader title="Our Impact" />
        <div className="container my-12 max-w-[900px]"></div>
    </Layout>
  );
};

export default OurImpact;
