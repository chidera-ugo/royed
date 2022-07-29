import { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = JSX.IntrinsicElements["div"] & {
  isOpen: boolean;
  open: (query: string) => void;
  close: () => void;
  title: string;
  body?: ReactNode | string;
  bodyClassName?: string;
  titleClassName?: string;
};

export const Accordion: FC<Props> = ({
  isOpen,
  open,
  close,
  title,
  className,
  body,
  bodyClassName,
  titleClassName,
}: Props) => {
  const variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <button
      onClick={() => {
        if (isOpen) {
          close();
        } else {
          open(title);
        }
      }}
      className={`${
        className ? className : ""
      } w-full text-left text-lg capitalize hover:underline ${
        isOpen ? "text-primary-main hover:no-underline" : ""
      }`}
    >
      <div className="x-between w-full py-3">
        <span className={`${titleClassName ? titleClassName : ""}`}>
          {title}
        </span>
        {body && (
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="my-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
        )}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                height: "auto",
              },
              collapsed: {
                height: 0,
                overflow: "hidden",
              },
            }}
            transition={{
              duration: 0.3,
            }}
            className={`${bodyClassName ? bodyClassName : ""}`}
          >
            {body}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
};
