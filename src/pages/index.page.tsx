import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/sections/about/about";
import Jumbo from "../components/sections/jumbo/jumbo";
import Skills from "../components/sections/skills/skills";
import Work from "../components/sections/work/work";
import styles from "../styles/Home.module.css";

import AnimationWrapper from "../components/ui/animationWrapper/animationWrapper";
import { useScrollToTopOnLoad } from "../utils/useScrollToTopOnLoad";
import { ChevronDown } from "react-feather";
import Work2 from "../components/sections/work2/work2";

const Home: NextPage = () => {
  useScrollToTopOnLoad();

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimationWrapper>
      <div lang="en" className={styles.container}>
        <Head>
          <title>Anthony Fernandez Web Developer Portfolio</title>
          <meta
            lang="en"
            name="description"
            content="Anthony Fernandez, fullstack software engineer with 3+ years of experience building enterprise applications."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div style={{ zIndex: 50 }}>
            <Jumbo />
          </div>
          <div
            className={
              scrollPosition > 20
                ? styles.hidden_animated_arrow
                : styles.animated_arrow
            }
          >
            <ChevronDown />
          </div>
          <div style={{ zIndex: 51 }}>
            <About />
            <Work2 />
            <Work />
            <Skills />
          </div>
        </main>
      </div>
    </AnimationWrapper>
  );
};

export default Home;