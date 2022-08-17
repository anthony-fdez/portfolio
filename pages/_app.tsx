import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { AnimatePresence } from "framer-motion";

import "react-medium-image-zoom/dist/styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000/${router.route}`;

  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
