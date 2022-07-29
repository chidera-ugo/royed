import type { NextPage } from "next";
import { Layout } from "components/primary/Layout";
import { ContactLinks } from "components/modules/ContactLinks";
import { faqs } from "constants/faqs";
import { useState } from "react";
import { Accordion } from "components/primary/Accordion";
import { PageHeader } from "components/modules/PageHeader";

const FAQs: NextPage = () => {
  const [currentFaq, setCurrentFaq] = useState("");

  return (
    <Layout title="Frequently Asked Questions">
      <PageHeader
        title="Frequently Asked Questions"
        subTitle="Use this page to find answers to common questions about Royalty Education & Development Foundation"
      />

      {/* BODY */}
      <div className="container my-12 grid-cols-12 gap-12 1024:grid">
        <div className="col-span-7">
          {faqs.map(({ question, answer }) => (
            <Accordion
              key={question}
              isOpen={currentFaq === question}
              body={answer}
              title={question}
              close={() => setCurrentFaq("")}
              titleClassName="font-secondary"
              bodyClassName="text-left text-base text-sm text-gray-400"
              open={(query) => setCurrentFaq(query)}
            />
          ))}
        </div>

        <div className="col-span-5 mt-12 1024:mt-0">
          <div className="card border-0 border-t pt-12 640:border 640:p-6">
            <p className="text-gray-400">
              You can use this page to quickly find answers to common questions
              about Royalty Education & Development Foundation. If you are not
              able to find the answer, please contat us via any of the means
              below. Thank you for giving us the opportunity to address your
              questions and concerns!
            </p>
            <div className="mt-5"></div>
            <ContactLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
