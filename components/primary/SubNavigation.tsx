import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  currentRoute?: string;
}

export const SubNavigation = ({ currentRoute }: Props) => {
  const { pathname } = useRouter();
  const paths = pathname.split("/").filter((item) => item);

  return (
    <div className="-ml-2 flex mt-4 p-2 align-middle text-xs capitalize">
      {paths.map((path, index) => {
        const link = `/${paths.slice(0, index + 1).join("/")}`;

        return (
          <div className="flex align-middle" key={path}>
            {index < paths.length - 1 ? (
              <Link href={link}>
                <a className="text-gray-900 hover:text-primary-main">
                  {path.split("-").join(" ")}
                </a>
              </Link>
            ) : // <div
            //   className={`${
            //     index === paths.length - 1 ? "text-primary-main" : ""
            //   }`}
            // >
            //   {path.split("-").join(" ")}
            // </div>
            null}

            {index < paths.length - 1 && (
              <div className="mx-2 my-auto text-gray-900">/</div>
            )}
          </div>
        );
      })}
      <div>{currentRoute}</div>
    </div>
  );
};
