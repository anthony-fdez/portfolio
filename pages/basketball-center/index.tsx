import type { NextPage } from "next";
import Head from "next/head";
import styles from "./basketball-center.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basketball Center | Anthony Fernandez Developer Portfolio</title>
        <meta
          name="Basketball Center"
          content="Description and information about the project Basketball Center, developed by Anthony Fernandez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Home;
