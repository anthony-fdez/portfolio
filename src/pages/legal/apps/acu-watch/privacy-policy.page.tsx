import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import styles from "../../../../styles/legalPage.module.css";
import StaticPageLayout from "../../../../components/layouts/StaticPageLayout";

const AcuWatchPrivacyPolicyPage: NextPage = () => {
  return (
    <StaticPageLayout title="AcuWatch">
      <Head>
        <title>AcuWatch Privacy Policy</title>
        <meta name="description" content="" key="desc" />
      </Head>
      <div className={styles.container}>
        <h1>AcuWatch Privacy Policy</h1>
        <p>Date Effective: 02/22/2024</p>

        <section>
          <h2>Introduction</h2>
          <p>
            We at AcuWatch are committed to protecting your privacy. This
            Privacy Policy applies to the use of our application, AcuWatch, and
            its services. This policy describes the types of information we do
            not collect from you and our practices for handling it.
          </p>
        </section>

        <section>
          <h2>No Personal Information Collection</h2>
          <p>
            AcuWatch does not collect, store, or use any personal information
            from its users. We do not require users to provide any personal data
            to download or use our application. This includes, but is not
            limited to, names, email addresses, and location information.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            Since we do not collect any personal information, there is no risk
            of your personal data being exposed or misused by our app. Our
            commitment to your privacy extends to ensuring that there is no
            personal data collection at any point during your use of AcuWatch.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. These changes are effective immediately after they are posted
            on this page.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at anthonyfdez23@gmail.com
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default AcuWatchPrivacyPolicyPage;
