import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/home/about/about";
import Jumbo from "../components/home/jumbo/jumbo";
import Skills from "../components/home/skills/skills";
import Work from "../components/home/work/work";
import styles from "../styles/Home.module.css";

import { BsChevronDown } from "react-icons/bs";

const Home: NextPage = () => {
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
    <div lang="en" className={styles.container}>
      <Head>
        <title>Anthony Fernandez Web Developer Portfolio</title>
        <meta
          lang="en"
          name="description"
          content="Main page of Anthony Fernandez's portfolio showcasing work, expirience, skills and contact information"
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
        <Work />
        <About />
        <Skills />
      </main>
    </div>
  );
};

export default Home;
