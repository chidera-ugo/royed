import Lottie from "lottie-react";
import Confetti from "lotties/confetti.json";

export const SuccessfulDonation = () => {
  return (
    <div className="relative overflow-hidden px-0 py-16 text-secondary-main 640:px-32">
      <div className="y-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-24 w-24 640:h-36 640:w-36"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h2 className="mt-3 text-center font-secondary text-2xl font-bold 640:text-3xl">
          Donation Received
        </h2>

        <div className="absolute inset-0 w-full opacity-30">
          <Lottie animationData={Confetti} loop />
        </div>

        <p className="text-dark-400 mobile:text-lg mt-5 text-center text-base leading-[24px] text-gray-500">
          We have received your generous donation. Be rest assured we will put
          your resources to good use.
        </p>
      </div>
    </div>
  );
};
