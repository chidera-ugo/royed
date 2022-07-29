import "styles/globals.css";
import type { AppProps } from "next/app";
import { BaseContextProvider } from "context/BaseContext";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "prismicio";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <BaseContextProvider>
            <Component {...pageProps} />
          </BaseContextProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}

export default MyApp;
