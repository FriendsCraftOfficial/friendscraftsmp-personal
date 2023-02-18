import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ประวัตินักเรียน - FriendsCraftSMP.SS3</title>
        <link
          rel="icon"
          href=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
