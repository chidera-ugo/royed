import Image from "next/image";
import { motion } from "framer-motion";
import { educationPoints, developmentPoints } from "constants/touchPoints";

export const TouchPointsSection = () => {
  return (
    <div className="container py-24 768:py-32">
      <div className="xl:gap-24 grid-cols-12 gap-16 768:grid">
        <motion.div
          className="relative col-span-6 hidden h-[600px] w-full 768:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt="children-learning"
            src="https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80"
            priority
            className="rounded-lg"
          />
        </motion.div>
        <div className="col-span-6 my-auto">
          <p className="uppercase text-secondary-main">our mission</p>
          <motion.h3
            className="mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Facilitating education of all people through
          </motion.h3>

          <motion.ul
            className="mt-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {educationPoints.map((point, index) => (
              <li className="flex py-2 align-middle text-gray-800" key={point}>
                <div className="mr-3">{index + 1}.</div>
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative col-span-6 mt-10 block h-44 w-full 768:mt-0 768:hidden"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt="children-learning"
            src="https://images.unsplash.com/photo-1490424660416-359912d314b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1340&q=80"
            priority
            className="rounded-lg"
          />
        </motion.div>
      </div>

      <div className="xl:gap-24 mt-12 grid-cols-12 gap-16 768:mt-44 768:grid">
        <div className="col-span-6 my-auto">
          <p className="uppercase text-primary-main">our mission</p>
          <motion.h3
            className="mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Facilitating development through
          </motion.h3>

          <motion.ul
            className="mt-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {developmentPoints.map((point, index) => (
              <li className="flex py-2 align-middle text-gray-800" key={point}>
                <div className="mr-3">{index + 1}.</div>
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          className="relative col-span-6 mt-10 h-44 w-full 768:mt-0 768:h-[600px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt="children-learning"
            src="https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1387&q=80"
            priority
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};
