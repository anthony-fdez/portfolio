import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/home/about/about";
import Jumbo from "../components/home/jumbo/jumbo";
import Skills from "../components/home/skills/skills";
import Work from "../components/home/work/work";
import styles from "../styles/Home.module.css";

import { BsChevronDown } from "react-icons/bs";
import AnimationWrapper from "../components/animationWrapper/animationWrapper";
import { useScrollToTopOnLoad } from "../utils/useScrollToTopOnLoad";

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
            content="Anthony Fernandez, fullstack software engineer with 3+ years of experience building production ready applications."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Jumbo />
          <div
            className={
              scrollPosition > 20
                ? styles.hidden_animated_arrow
                : styles.animated_arrow
            }
          >
            <BsChevronDown />
          </div>
          <About />
          <Work />
          <Skills />
        </main>
      </div>
    </AnimationWrapper>
  );
};

export default Home;
