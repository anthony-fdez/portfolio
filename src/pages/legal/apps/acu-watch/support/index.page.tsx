import { NextPage } from "next";
import React from "react";
import styles from "../../../legalPage.module.css";
import Head from "next/head";

const AcuWatchSupportPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>AcuWatch Support</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <div className={styles.container}>
        <h1>AcuWatch Support</h1>
        <section>
          <h2 id="contact-support">Contact Support</h2>
          <p>If you need assistance, please reach out to us:</p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:anthonyfdez23@gmail.com">
                anthonyfdez23@mail.com
              </a>
            </li>
          </ul>
        </section>
        <footer>
          <p>
            &copy; {new Date().getFullYear()} AcuWatch. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default AcuWatchSupportPage;
