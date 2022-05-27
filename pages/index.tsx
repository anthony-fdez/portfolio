import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/home/about/about";
import Jumbo from "../components/home/jumbo/jumbo";
import Skills from "../components/home/skills/skills";
import Work from "../components/home/work/work";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Fernandez Web Developer Portfolio</title>
        <meta
          name="Anthony Fernandez Web Developer Portfolio"
          content="Main page of Anthony Fernandez's portfolio showcasing work, expirience, skills and contact information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Jumbo />
        <Work />
        <About />
        <Skills />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
