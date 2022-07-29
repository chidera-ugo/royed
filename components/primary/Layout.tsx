import { PropsWithChildren } from "react";
import { Header } from "components/primary/Header";
import { DefaultHead } from "components/primary/DefaultHead";
import { Footer } from "components/primary/Footer";

interface Props {
  title?: string;
}

export const Layout = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <DefaultHead title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
