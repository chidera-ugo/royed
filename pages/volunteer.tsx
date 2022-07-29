import { Layout } from "components/primary/Layout";
import { PageHeader } from "components/modules/PageHeader";

const Volunteer = () => {
  return (
    <Layout title="Volunteer">
      <PageHeader
        title="Volunteer and Attend Events"
        subTitle="You can make a difference in people's lives. We are always looking for volunteers to help the cause."
      />

      <div className="container my-12 max-w-[900px]"></div>
    </Layout>
  );
};

export default Volunteer;
