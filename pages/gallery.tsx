import { Layout } from "components/primary/Layout";
import { PageHeader } from "components/modules/PageHeader";

const Gallery = () => {
  return (
    <Layout title="Gallery">
      <PageHeader
        title="Gallery"
        subTitle="Go through images taken on our campaigns"
      />

      <div className="container my-24 max-w-[900px] text-justify"></div>
    </Layout>
  );
};

export default Gallery;
