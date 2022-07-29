import { HeaderToggler } from "components/common/HeaderToggler";
import { HeroImages } from "components/modules/HeroImages";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="y-center relative min-h-hero-mobile bg-black 640:min-h-screen 1800:min-h-[900px]">
      <HeaderToggler />
      <HeroImages />

      <div className="container relative z-20 my-auto h-full text-center 640:pt-[120px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="font-secondary text-5xl leading-none text-white 640:text-6xl"
        >
          <div className="">Educating People. </div>
          <div className="mt-4">Developing Lands.</div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-10 max-w-[720px] text-xl font-light  text-white"
        >
          This is our mission — improving the lives of people through education
          regardless of politics, religion, or ability to pay.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="x-center mt-10"
        >
          <Link href="/donate">
            <a className="primary-button-outline smooth bg-white hover:bg-gray-100 hover:px-12">
              want to help?
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
