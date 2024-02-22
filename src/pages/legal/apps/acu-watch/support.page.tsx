import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import styles from "../../../../styles/legalPage.module.css";
import StaticPageLayout from "../../../../components/layouts/StaticPageLayout";

const AcuWatchSupportPage: NextPage = () => {
  return (
    <StaticPageLayout title="AcuWatch">
      <Head>
        <title>AcuWatch Support</title>
        <meta name="description" content="" key="desc" />
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
    </StaticPageLayout>
  );
};

export default AcuWatchSupportPage;
