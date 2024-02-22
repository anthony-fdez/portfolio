import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import "../styles/globals.css";

import { GoogleAnalytics } from "nextjs-google-analytics";
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

import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/ui/MDX/components";

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

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Tab") {
        requestAnimationFrame(() => {
          const activeElement = document.activeElement;

          if (!activeElement) return;

          const elementRect = activeElement.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - window.innerHeight / 2;
          window.scrollTo({ top: middle, behavior: "smooth" });
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-7SKYBJ6PYQ" />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} key={router.route} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
