import { Layout } from "components/primary/Layout";
import Link from "next/link";
import { ContactLinks } from "components/modules/ContactLinks";
import { PageHeader } from "components/modules/PageHeader";

const ContactUs = () => {
  return (
    <Layout title="Contact Us">
      <PageHeader
        title="Contact Us"
        subTitle="You can reach out to us if you have any questions via email or phone or pay us a visit at our head office"
      />

      <div className="container my-12 max-w-[700px]">
        <div>
          <h2>
            Do you have a question or general inquiry? Answers to many common
            questions can be found on our Frequently Asked Questions page.
          </h2>

          <Link href="faqs">
            <a className="secondary-button-solid mt-6 text-center">
              Frequently Asked Questions
            </a>
          </Link>
        </div>

        <div className="mt-12">
          <div className="flex align-middle">
            <ContactLinks />
          </div>

          {/* MAP */}
          <div className="mt-8 h-56 w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0018416904913!2d7.423825099999999!3d9.0635952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e74dbc6704adb%3A0xe0634c1feade0d1b!2s6%20Ebitu%20Ukiwe%20St%2C%20Jabi%20900108%2C%20Abuja!5e0!3m2!1sen!2sng!4v1652942760494!5m2!1sen!2sng"
              allowFullScreen={false}
              className="h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
