import { Layout } from "components/primary/Layout";
import { PageHeader } from "components/modules/PageHeader";

const ActiveProjects = () => {
  return (
    <Layout title="Active Projects">
      <PageHeader
        title="Active Projects"
        subTitle="The causes we are currently pursuing"
      />

      <div className="container my-24 max-w-[900px] text-justify"></div>
    </Layout>
  );
};

export default ActiveProjects;
