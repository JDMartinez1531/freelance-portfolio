import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Joshua Martinez</title>
        <meta name="description" content="Portfolio by Joshua Martinez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@1.5.7/dist/lottie-player.js"
        strategy="afterInteractive"
      />
      <Header />

      <div className="font-mont">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
