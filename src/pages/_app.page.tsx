import React, { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import "react-medium-image-zoom/dist/styles.css";
import { fixTimeoutTransition } from "../utils/fixTimeoutTransition";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Global UI styles
import "../styles/ui/Dialog.css";
import "../styles/ui/NavigationMenu.css";

import Header from "../components/ui/header/header";
import Footer from "../components/ui/footer/footer";
import ProjectsDialog from "../components/ui/ProjectsDialog/ProjectsDialog";

const TRANSITION_DURATION = 500;

fixTimeoutTransition(TRANSITION_DURATION);

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      if (window) {
        window.history.scrollRestoration = "manual";
      }
    }, 100);
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <ProjectsDialog />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
