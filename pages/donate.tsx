import type { NextPage } from "next";
import { Layout } from "components/primary/Layout";
import { DonateForm } from "components/forms/DonateForm";
import { useRouter } from "next/router";
import { SuccessfulDonation } from "components/modules/SuccessfulDonation";
import { YourGiftsHelp } from "components/modules/YourGiftsHelp";
import { ForEnquiries } from "components/modules/ForEnquiries";
import { PageHeader } from "components/modules/PageHeader";

const Donate: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title="Donate Now">
      <PageHeader
        title="Donate Now"
        subTitle="Your donations will be used for improving the lives of people through education and community development"
      />

      {/* BODY */}
      <div className="container my-12 grid-cols-12 gap-12 1024:grid">
        <div className="col-span-7">
          <div className="card border-0 shadow-none 640:border">
            {query.success ? <SuccessfulDonation /> : <DonateForm />}
          </div>
        </div>

        <div className="col-span-5 mt-16 1024:mt-0">
          <YourGiftsHelp />
          <ForEnquiries />
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
