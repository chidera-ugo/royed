import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useNavigationItems } from "hooks/useNavigationItems";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenu } from "components/primary/MobileMenu";
import { Portal } from "components/primary/Portal";
import { useBaseContext } from "context/BaseContext";
import { useRouter } from "next/router";

export const Header = () => {
  const navigationItems = useNavigationItems();
  const [showMenu, setShowMenu] = useState(false);
  const [currentNavigationMenu, setCurrentNavigationMenu] = useState("");
  const { headerBg } = useBaseContext();
  const { pathname } = useRouter();

  const isHeaderChangeable = () => {
    if (pathname === "/") return true;
  };

  return (
    <header
      className={`smooth top-0 left-0 z-[800] w-full border-gray-200 ${
        isHeaderChangeable()
          ? headerBg === "white"
            ? "fixed border-b bg-white bg-opacity-80 backdrop-blur-lg"
            : "fixed bg-transparent"
          : "sticky border-b bg-white bg-opacity-90 backdrop-blur-lg"
      }`}
    >
      <AnimatePresence>
        {showMenu && (
          <Portal>
            <MobileMenu hideMenu={() => setShowMenu(false)} />
          </Portal>
        )}
      </AnimatePresence>

      <nav className="x-between container my-auto h-20 640:h-[120px]">
        <Link href="/">
          <a className="relative my-auto h-[50px] w-[120px] 640:h-[80px] 640:w-[180px]">
            <Image
              layout="fill"
              objectFit="contain"
              alt="roydef-logo"
              src={
                isHeaderChangeable()
                  ? headerBg === "transparent"
                    ? "/logos/logo-white.svg"
                    : "/logos/logo.svg"
                  : "/logos/logo.svg"
              }
            />
          </a>
        </Link>

        <button
          onClick={() => setShowMenu(true)}
          className={`block 1200:hidden ${
            isHeaderChangeable()
              ? headerBg === "white"
                ? "text-gray-700"
                : "text-white"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="my-auto hidden align-middle 1200:flex">
          <ul className="col-span-6 my-auto mr-8 flex h-full align-middle font-normal">
            {navigationItems.map(({ title, subItems }) => {
              const variants = {
                open: { rotate: 180 },
                closed: { rotate: 0 },
              };

              if (!subItems) {
                return (
                  <Link
                    href={`/${title.split(" ").join("-").toLowerCase()}`}
                    key={title}
                  >
                    <a
                      className={`link flex h-12 px-4 align-middle ${
                        isHeaderChangeable()
                          ? headerBg === "transparent"
                            ? "text-white"
                            : ""
                          : ""
                      }`}
                    >
                      <span className="my-auto">{title}</span>
                    </a>
                  </Link>
                );
              }

              return (
                <li
                  key={title}
                  className="relative"
                  onMouseOver={() => setCurrentNavigationMenu(title)}
                  onMouseOut={() => setCurrentNavigationMenu("")}
                >
                  <div
                    className={`link flex h-12 align-middle ${
                      currentNavigationMenu === title ? "text-primary-main" : ""
                    } ${
                      isHeaderChangeable()
                        ? headerBg === "transparent"
                          ? "text-white"
                          : ""
                        : ""
                    }`}
                  >
                    <span className="my-auto mr-2">{title}</span>

                    <motion.span
                      animate={
                        currentNavigationMenu === title ? "open" : "closed"
                      }
                      variants={variants}
                      className="my-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {currentNavigationMenu === title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          transition: { duration: 0.1 },
                        }}
                        className="absolute top-12 right-5 pt-2"
                      >
                        <div className="min-w-[300px] rounded-lg border border-gray-200 bg-white shadow-sm">
                          {subItems.map((item, index) => (
                            <Link
                              key={item}
                              href={`/${item
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                            >
                              <a
                                className={`sub-nav-link ${
                                  index < subItems.length - 1
                                    ? "border-b border-gray-100"
                                    : ""
                                }`}
                              >
                                {item}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex align-middle">
            <Link href="/contact-us">
              <a
                className={`primary-button-outline ${
                  isHeaderChangeable()
                    ? headerBg === "transparent"
                      ? "primary-button-outline border-white text-white"
                      : ""
                    : ""
                } mr-4`}
              >
                Contact Us
              </a>
            </Link>

            <Link href="/donate">
              <a className="primary-button-solid">Donate</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
