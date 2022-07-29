import Head from "next/head";

interface Props {
  title?: string;
}

export const DefaultHead = ({ title }: Props) => (
  <Head>
    <title>
      {title
        ? `${title} | RoyEd`
        : "Royalty Education & Development Foundation<"}
    </title>
    <meta
      name="description"
      content="Royalty Education & Development Foundation"
    />
    <link rel="icon" type="image/svg" sizes="16x16" href="/favicon.svg" />
  </Head>
);
