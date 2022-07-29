import { Layout } from "components/primary/Layout";
import { PageHeader } from "components/modules/PageHeader";

const OurHistory = () => {
  return (
    <Layout title="Donate Now">
      <PageHeader title="Our History" />

      <div className="container my-24 rich-text max-w-[900px] text-justify">
        <div>
          <p>
            Royalty Education and Development Foundation (REDF) is a Non-profit
            Organisation, duly registered under Part F of the Company and Allied
            Matters Act (CAMA) and dedicated to promoting the advancement of
            Education, Economic and other infrastructural developments to
            improve quality of life of the people of Igumale community, Ado
            Local Government Benue state.
          </p>

          <p className="mt-6">
            The foundation is the corporate social responsibility of The Royalty
            University Igumale to be sited in Igumale, Ado Local Government Area
            (LGA), Benue State. The Chairman of the Foundation Agbo Adams is
            also the founder of the prestigious Royalty University Igumale.
            Adams with a heart for the people hails from Benue and desires to
            see his community and people have the same opportunity and good life
            God has given him hence bringing all forms of development he can
            think and what better way to start then Education in form of the
            Royalty University.
          </p>

          <p className="mt-6">
            The 2030 Agenda for Sustainable Development, adopted by all United
            Nations Member States in 2015, provided a shared blueprint for peace
            and prosperity for people and the planet,as well as the future. At
            its heart are the 17 Sustainable Development Goals (SDGs), which are
            an urgent call for action by all countries - developed and
            developing - in a global partnership. The Foundation using the
            knowledge to incorporate Nos 1,2,3&4 as a guide in execution of many
            of its projects in Benue State.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-primary-main">What we do</h2>
          <p className="mt-6">
            In the words of Nelson Mandela, “Education is the most powerful
            weapon you can use to change the world”. Our goal at Royalty
            Education and Development Foundation is to ensure that every child
            that passes through our system becomes an integral part of society,
            making an impact and changing more lives in the world at large. We
            recognize that in making a change in our community, we also make a
            change in the Country Nigeria and the World at large. And what
            better way to bring this change than in Education and
            infrastructural development.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default OurHistory;
