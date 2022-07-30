import { useSocials } from "hooks/useSocials";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { linkedIn, facebook, twitter, instagram } = useSocials();

  return (
    <footer className="bg-gray-900 py-12 1280:py-24">
      <div className="container">
        <div className="w-full">
          <div className="pb-8 text-white">
            {[instagram, facebook, linkedIn, twitter].map((social) => (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={social.url}
                key={social.url}
                className="smooth inline-block py-3 px-4 text-white hover:text-secondary-main"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-gray-800 pt-12 1280:flex-row 1280:align-middle">
          <Link href="/">
            <a className="relative h-[80px] w-[60px] 1280:w-[180px]">
              <Image
                layout="fill"
                objectFit="contain"
                alt="roydef-logo"
                src="/favicon.svg"
              />
            </a>
          </Link>

          <div className="text-sm text-gray-400">
            <p>
              Royalty Education and Development Foundation (REDF) is a
              Non-profit Organisation, duly registered under Part F of the
              Company and Allied Matters Act (CAMA) and dedicated to promoting
              the advancement of Education, Economic and other infrastructural
              developments to improve quality of life of the people of Igumale
              community, Ado Local Government Benue state.
            </p>
            <div className="x-between mt-8 block 1280:flex">
              <p className="my-auto">
                © 2022 Royalty Education and Development Foundation
              </p>

              <div className="my-auto mt-10 -ml-3 block align-middle 640:flex 1280:ml-0 1280:mt-0">
                {["FAQs", "charitable solicitation disclosures"].map((link) => (
                  <Link
                    href={`/${link.split(" ").join("-").toLowerCase()}`}
                    key={link}
                  >
                    <a className="block px-3 py-1 capitalize hover:underline">
                      {link}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
