import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import BackToHomeButton from "../../components/backToHomeButton/backToHomeButton";
import styles from "../../styles/project.module.css";

import { Fade } from "react-awesome-reveal";
import ImagesCarousel from "../../components/imagesCarousel/imagesCarousel";
import AnimationWrapper from "../../components/animationWrapper/animationWrapper";

const Dls: NextPage = () => {
  const images: string[] = [
    "/dls/1.png",
    "/dls/2.png",
    "/dls/3.png",
    "/dls/4.png",
  ];

  return (
    <AnimationWrapper>
      <div className={styles.container}>
        <Head>
          <title>DLS Fixit | Anthony Fernandez Developer Portfolio</title>
          <meta
            lang="en"
            name="description"
            content="Description and information about the project DLSFixit, developed by Anthony Fernandez"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Fade>
          <main className={styles.main}>
            <BackToHomeButton />
            <div className={styles.header}>
              <h1>DLS Fixit</h1>
              <p>
                DLS Fixit is an informational website showcasing the the
                services that the company offers, and information about the
                company.
              </p>
            </div>
            <p className={styles.live_preview_link}>
              Live Website:{" "}
              <a
                className="link"
                target="_blank"
                href="https://dlsfixit.com/"
                rel="noreferrer"
              >
                https://dlsfixit.com/
              </a>
            </p>
            <ImagesCarousel images={images} altText="DLSFixit Screenshot" />
            <div className={styles.project_info}>
              <h2>Technologies used:</h2>
              <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Redux</li>
                <li>Google Analytics</li>
                <li>Bootstrap</li>
              </ul>
              <br></br>
            </div>
          </main>
        </Fade>
      </div>
    </AnimationWrapper>
  );
};

export default Dls;
