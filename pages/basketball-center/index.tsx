import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import BackToHomeButton from "../../components/backToHomeButton/backToHomeButton";
import styles from "./basketball-center.module.css";

import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

import { Fade } from "react-awesome-reveal";
import ImagesCarousel from "../../components/imagesCarousel/imagesCarousel";

const BasketballCenter: NextPage = () => {
  const images: string[] = [
    "/basketball-center/1.png",
    "/basketball-center/2.png",
    "/basketball-center/3.png",
    "/basketball-center/4.png",
    "/basketball-center/5.png",
    "/basketball-center/6.png",
    "/basketball-center/7.png",
    "/basketball-center/8.png",
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Basketball Center | Anthony Fernandez Developer Portfolio</title>
        <meta
          lang="en"
          name="description"
          content="Description and information about the project Basketball Center, developed by Anthony Fernandez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fade>
        <main className={styles.main}>
          <BackToHomeButton />
          <br></br>
          <h1>Basketball Center</h1>
          <p>
            Basketball Center is a full stack application built for Android and
            IOS, it provides stats, real time and historical information about
            players and teams. All the NBA games stats are updated real time as
            well. It also has a chat built in per game, allowing users to
            interact with other people and discuss the game.
          </p>
          <br></br>
          <ImagesCarousel
            orientation="portrait"
            images={images}
            altText={"Basketball Center Screenshot"}
          />
          <br></br>
          <h2>Technologies Used</h2>
          <br></br>
          <h3>Front End / App:</h3>
          <ul>
            <li>React Native for both the IOS and Android app</li>
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
            <li>Expo push notifications</li>
            <li>Rest API</li>
          </ul>
          <br></br>
          <h2>Download App</h2>
          <div className={styles.download_container}>
            <AiFillApple />
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/basketball-center/id1588423237"
              rel="noreferrer"
            >
              View on AppStore
            </a>
          </div>
          <div className={styles.download_container}>
            <FaGooglePlay />
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.basketballCenter.anthony&hl=en_US&gl=US"
              rel="noreferrer"
            >
              View on Google Play Store
            </a>
          </div>
          <br></br>
          <br></br>
          <p>
            As of right now the source code for Basketball Center is closed
            source
          </p>
        </main>
      </Fade>
    </div>
  );
};

export default BasketballCenter;
