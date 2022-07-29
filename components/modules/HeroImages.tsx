import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "utils/heroImages";

export const HeroImages = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const interval = useRef<unknown>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 4000);

    return () => {
      clearInterval(interval.current as number);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={currentImage}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="absolute inset-0 z-0 my-auto h-full w-full"
      >
        <Image
          layout="fill"
          objectFit="cover"
          alt="children-learning"
          src={currentImage}
          priority
        />

        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-70"></div>

        {/* <div className="y-center absolute top-0 right-0 m-4 h-12 w-12 rounded-full bg-secondary-main p-3 text-center font-bold text-white">
          {images.indexOf(currentImage)}
        </div> */}
      </motion.div>
    </AnimatePresence>
  );
};
