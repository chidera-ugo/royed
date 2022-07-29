import { FC } from "react";
import { HeroImages } from "components/modules/HeroImages";

interface Props {
  title: string;
  subTitle?: string;
}

export const PageHeader: FC<Props> = ({ title, subTitle }: Props) => {
  return (
    <div className="relative inset-0 top-0 h-48 w-full bg-black 640:h-64">
      <HeroImages />
      <div className="y-center absolute inset-0 h-full w-full px-8 text-center text-white">
        <div>
          <h1 className="font-secondary text-3xl 768:text-5xl">{title}</h1>
          {subTitle && (
            <p className="mt-4 text-sm 640:mt-6 768:text-base">{subTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};
