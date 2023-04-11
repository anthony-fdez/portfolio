import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import BackToHomeButton from "../../components/backToHomeButton/backToHomeButton";
import styles from "../../styles/project.module.css";

import { Fade } from "react-awesome-reveal";
import ImagesCarousel from "../../components/imagesCarousel/imagesCarousel";
import AnimationWrapper from "../../components/animationWrapper/animationWrapper";
import { useScrollToTopOnLoad } from "../../utils/useScrollToTopOnLoad";
import { GitHub } from "react-feather";

const Protypist: NextPage = () => {
  useScrollToTopOnLoad();

  const images: string[] = [
    "/protypist/1.png",
    "/protypist/2.png",
    "/protypist/3.png",
    "/protypist/4.png",
    "/protypist/5.png",
  ];

  return (
    <AnimationWrapper>
      <div className={styles.container}>
        <Head>
          <title>ProTypist | Anthony Fernandez Developer Portfolio</title>
          <meta
            lang="en"
            name="description"
            content="Description and information about the project ProTypist, developed by Anthony Fernandez"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.background_text_protypist}>
          DAY LATE MAY SO RIGHT CHANGE LAST INCREASE OWN NEED MUCH WHO COULD OUT
          GOVERN CALL OPEN INTO WE EVEN SHOW WOULD WE NATION OR GROUP NEW FACT
          WORK OVER PERSON THIS PLAN MOVE FEEL FACT EYE OR KEEP
        </h1>
        <Fade>
          <main className={styles.main}>
            <BackToHomeButton />
            <div className={styles.header}>
              <h1>ProTypist</h1>
              <p>
                ProTypist is a fully featured typing game. With a multiplayer
                mode, custom games, quotes, top most common words in 7 languages
                and multiple themes.
              </p>
            </div>
            <p className={styles.live_preview_link}>
              Live Website:{" "}
              <a
                className="link"
                target="_blank"
                href="https://protypist.app/"
                rel="noreferrer"
              >
                https://protypist.app/
              </a>
            </p>
            <ImagesCarousel images={images} altText={"ProTypist Screenshot"} />
            <div className={styles.project_info}>
              <h2>Technologies Used</h2>
              <br></br>
              <h3>Front End / App:</h3>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>SocketIO Client</li>
                <li>Google Analytics</li>
              </ul>
              <br></br>
              <h3>Back End:</h3>
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB / Mongoose</li>
                <li>SocketIO</li>
                <li>Rest API</li>
              </ul>
              <br></br>
              <h2>Source Code</h2>
              <div className={styles.github_container}>
                <GitHub />
                <a
                  target="_blank"
                  href="https://github.com/anthony-fdez/protypist"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </main>
        </Fade>

        {/* <footer className={styles.footer}></footer> */}
      </div>
    </AnimationWrapper>
  );
};

export default Protypist;
