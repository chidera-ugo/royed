import { useBaseContext } from "context/BaseContext";
import { useInView } from "react-intersection-observer";

export const HeaderToggler = () => {
  const { changeHeaderBg } = useBaseContext();

  const { ref } = useInView({
    threshold: 0,
    onChange(inView) {
      if (inView) {
        changeHeaderBg("transparent");
      } else {
        changeHeaderBg("white");
      }
    },
  });

  return (
    <div
      ref={ref}
      className="absolute -z-10 h-full w-full bg-transparent"
    ></div>
  );
};
