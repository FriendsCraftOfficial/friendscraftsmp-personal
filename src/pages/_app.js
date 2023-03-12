import ".././styles/globals.css";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ประวัตินักเรียน - FriendsCraftSMP.SS3</title>
        <link rel="icon" href="/logo.png" />

        {/* <!-- SEO --> */}
        <meta name="author" content="PPekKunGz Dev" />
        <meta
          name="keywords"
          content="PPekKunGzDev,PPekKunGz_Dev,เพ็กคุง,รับทำเว็บไซต์,รับทำเว็บไซต์ราคาถูก,รับทำเว็บไซต์อื่นๆ,เว็บไซต์PPekKunGz,เพ็กคุงทำเว็บ"
        />

        <meta property="og:local" content="th_TH" />
        <meta property="og:url" content="https://personal.ppekkungz.online" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FriendsCraftSMP SS3 - High School" />
        <meta
          property="og:description"
          content="📗 เว็ปไซต์แสดงประวัตินักเรียนในโรงเรียน "
        />
        <meta
          property="og:image"
          content="https://personal.ppekkungz.online/logo.png"
        />
        <meta property="og:url" content="https://personal.ppekkungz.online/" />
        <meta
          property="og:site_name"
          content="FriendsCraft Official, @PPekKunGzDev"
        />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
