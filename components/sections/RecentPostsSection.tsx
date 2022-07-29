import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

export const RecentPostsSection = () => {
  const posts = [
    {
      title: "How We Plan to Bring Drinkable Water to Rural Areas",
      summary: `Amet quis magna ipsum qui excepteur est in pariatur eiusmod. Lorem
                magna elit nisi quis non laboris magna excepteur dolore aliquip.
                Eiusmod qui labore quis Lorem voluptate aliqua id esse in cupidatat
                sint. Commodo et sit quis officia labore do irure Lorem. Nostrud
                consectetur Lorem nisi velit consectetur consequat occaecat.`,
      image:
        "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1432&q=80",
    },
    {
      title: "How We Plan to Bring Drinkable Water to Rural Areas",
      summary: `Amet quis magna ipsum qui excepteur est in pariatur eiusmod. Lorem
                magna elit nisi quis non laboris magna excepteur dolore aliquip.
                Eiusmod qui labore quis Lorem voluptate aliqua id esse in cupidatat
                sint. Commodo et sit quis officia labore do irure Lorem. Nostrud
                consectetur Lorem nisi velit consectetur consequat occaecat.`,
      image:
        "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
    },
  ];

  return (
    <div className=" relative bg-white 425:py-12 640:py-24 1024:py-32">
      <div className="absolute inset-0 top-0 h-full w-full bg-primary-900"></div>
      <div className="425s:container container relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
          showIndicators={false}
          
          className="overflow-hidden rounded-2xl"
          // renderIndicator={(
          //   clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
          //   isSelected: boolean
          // ) => {
          //   if (isSelected) {
          //     return (
          //       <span onClick={clickHandler} className="p-2">
          //         <span className="bg-primary-700 inline-block h-[7px] w-[7px] rounded-full"></span>
          //       </span>
          //     );
          //   }

          //   return (
          //     <span onClick={clickHandler} className="p-2">
          //       <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#A9DBF2] shadow-lg"></span>
          //     </span>
          //   );
          // }}
        >
          {posts.map(({ title, summary, image }) => {
            return (
              <div key={title} className="grid w-full grid-cols-12 bg-white">
                <div className="col-span-6 p-12 text-left">
                  <p className="text-sm uppercase text-secondary-main">
                    Featured Posts
                  </p>
                  <h3 className="mt-4 text-3xl 640:text-4xl">{title}</h3>

                  <p className="mt-6 font-light text-gray-500 line-clamp-2">
                    {summary}
                  </p>

                  <div className="flex align-middle">
                    <Link href="/">
                      <a className="secondary-button-outline smooth mt-8 hover:px-8">
                        Read more
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="relative col-span-6 block h-full">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="children-learning"
                    src={image}
                    className="pointer-events-none"
                    priority
                  />
                </div>

                {/* <div className="mt-8 flex w-full justify-between rounded-full align-middle 1024:hidden">
                <button onClick={() => paginate(-1)}>
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
      
                <button onClick={() => paginate(1)}>
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
              </div> */}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
