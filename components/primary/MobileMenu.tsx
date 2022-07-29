import { motion } from "framer-motion";
import { useNavigationItems } from "hooks/useNavigationItems";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "./Accordion";

interface Props {
  hideMenu: () => void;
}

export const MobileMenu = ({ hideMenu }: Props) => {
  const navigationItems = useNavigationItems();
  const [currentNavigationMenu, setCurrentNavigationMenu] = useState("");

  const { pathname } = useRouter();

  return (
    <div className="fixed inset-0 z-[900] h-screen w-screen">
      <motion.button
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        onClick={hideMenu}
        tabIndex={-1}
        className="z-910 absolute h-full w-full bg-black bg-opacity-70"
      ></motion.button>

      <motion.div
        animate={{ right: 0 }}
        initial={{ right: "-100%" }}
        transition={{ duration: 0.3 }}
        exit={{ right: "-100%" }}
        className="z-920 relative ml-auto h-full w-full bg-white"
      >
        <div>
          <div className="x-between p-4">
            <div></div>
            <button onClick={hideMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-primary-main"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4">
            {navigationItems.map(({ title, subItems }) => {
              if (!subItems) {
                return (
                  <Link
                    key={title}
                    href={`/${title.split(" ").join("-").toLowerCase()}`}
                  >
                    <a
                      className={`block py-3 text-left capitalize text-gray-800 w-full text-lg hover:underline px-6 ${
                        pathname === `/${title}/${title.split(" ").join("")}`
                          ? "text-primary-main"
                          : ""
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                );
              }

              return (
                <Accordion
                  key={title}
                  className="px-6"
                  isOpen={currentNavigationMenu === title}
                  body={
                    <div className="ml-3">
                      {subItems.map((item) => (
                        <Link
                          key={item}
                          href={`/${item.split(" ").join("-").toLowerCase()}`}
                        >
                          <a
                            className={`block py-3 text-left capitalize text-gray-800 ${
                              pathname ===
                              `/${title}/${item.split(" ").join("")}`
                                ? "text-primary-main"
                                : ""
                            }`}
                          >
                            {item}
                          </a>
                        </Link>
                      ))}
                    </div>
                  }
                  title={title}
                  close={() => setCurrentNavigationMenu("")}
                  open={(query) => setCurrentNavigationMenu(query)}
                />
              );
            })}

            <div className="mt-8 px-6">
              <Link href="/contact-us">
                <a className="primary-button-outline text-center">Contact Us</a>
              </Link>

              <Link href="/donate">
                <a className="primary-button-solid mt-5 text-center">Donate</a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
