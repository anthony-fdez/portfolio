import type { NextPage } from "next";
import Head from "next/head";
import styles from "./protypist.module.css";

const Protypist: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ProTypist | Anthony Fernandez Developer Portfolio</title>
        <meta
          name="ProTypist"
          content="Description and information about the project ProTypist, developed by Anthony Fernandez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Protypist;
