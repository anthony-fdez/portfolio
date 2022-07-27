import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import BackToHomeButton from "../../components/backToHomeButton/backToHomeButton";
import styles from "./protypist.module.css";

import { BsGithub } from "react-icons/bs";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Fade } from "react-awesome-reveal";
import ImagesCarousel from "../../components/imagesCarousel/imagesCarousel";

const Protypist: NextPage = () => {
  const images: string[] = [
    "/protypist/1.png",
    "/protypist/2.png",
    "/protypist/3.png",
    "/protypist/4.png",
    "/protypist/5.png",
  ];
  return (
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
      <Fade>
        <main className={styles.main}>
          <BackToHomeButton />
          <br></br>
          <h1>ProTypist</h1>
          <p>
            ProTypist is a fully featured typing game. With a multiplayer mode,
            custom games, quotes, top most common words in 7 languages and
            multiple themes.
          </p>
          <br></br>
          <p>
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
          <br></br>
          <ImagesCarousel images={images} altText={"ProTypist Screenshot"} />
          <br></br>{" "}
          <div className={styles.modal_content_container}>
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
              <BsGithub />
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
  );
};

export default Protypist;
