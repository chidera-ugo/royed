import { ContactLinks } from "components/modules/ContactLinks";

export const ForEnquiries = () => {
  return (
    <div>
      <h2 className="mt-10">For more enquiries;</h2>
      <p className="mt-3 text-gray-400">
        You can reach out to us if you have any questions via email or phone or
        pay us a visit at our head office
      </p>
      <div className="mt-5"></div>
      <ContactLinks />
    </div>
  );
};
