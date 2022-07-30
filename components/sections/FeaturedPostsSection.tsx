import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { usePosts } from "hooks/usePosts";
import dayjs from "dayjs";
import { months } from "utils/months";
import { motion } from "framer-motion";

type Props = {
  posts: ReturnType<typeof usePosts>["posts"];
};

export const FeaturedPostsSection = ({ posts }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => {
      return prev + 1;
    });
  };

  const prev = () => {
    setCurrentSlide((prev) => {
      return prev - 1;
    });
  };

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="relative bg-white py-12 640:py-24 1024:py-32">
      <div className="absolute inset-0 top-0 h-full w-full bg-primary-900"></div>
      <div className="container relative">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="text-center text-white px-8 640:px-0"
        >
          Featured Posts from Our Blog
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="relative mt-12"
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            autoPlay
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
            infiniteLoop
            preventMovementUntilSwipeScrollTolerance
            swipeScrollTolerance={50}
            showIndicators={false}
            className="overflow-hidden"
          >
            {posts.map(
              ({ title, author, bannerImage, content, createdAt, uid }) => {
                const date = dayjs(createdAt);

                return (
                  <div
                    key={title}
                    className="880:grid w-full grid-cols-12 bg-white"
                  >
                    <div className="col-span-6 p-6 640:p-12 text-left">
                      <h3 className="text-2xl 640:text-3xl">{title}</h3>

                      <p className="mt-4 text-sm font-light text-gray-500 line-clamp-4">
                        {content[0].text}
                      </p>

                      <div className="mt-4 flex gap-2 text-gray-600 text-sm align-middle">
                        <span>By {author.fullName}</span>
                        <span> | </span>
                        <span>
                          {`${months[date.month()]} ${date.get(
                            "d"
                          )}, ${date.get("y")}`}
                        </span>
                      </div>

                      <div className="flex align-middle">
                        <Link href={`/our-blog/${uid}`}>
                          <a className="secondary-button-outline smooth mt-8 hover:px-8">
                            Read more
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="relative col-span-6 block min-h-[200px] h-full">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt={bannerImage.alt}
                        src={bannerImage.url}
                        className="pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                );
              }
            )}
          </Carousel>

          <div className="absolute right-5 bottom-5 880:top-0">
            <div className="mt-8 flex w-full justify-between rounded-full align-middle bg-white shadow-lg">
              <button onClick={prev}>
                <div className="y-center smooth h-9 w-9 rounded-full text-gray-500 hover:bg-gray-100 hover:text-secondary-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </div>
              </button>

              <button onClick={next}>
                <div className="y-center smooth h-9 w-9 rounded-full bg-white text-gray-500 hover:bg-gray-100 hover:text-secondary-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
