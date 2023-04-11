import React from "react";
import Head from "next/head";
import styles from "../project.module.css";

import ImagesCarousel from "../../../../imagesCarousel/imagesCarousel";

const BasketballCenter = (): JSX.Element => {
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

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Basketball Center</h1>
          <p>
            Basketball Center is a full stack application built for Android and
            IOS, it provides stats, real time and historical information about
            players and teams. All the NBA games stats are updated real time as
            well. It also has a chat built in per game, allowing users to
            interact with other people and discuss the game.
          </p>
          <br />
          <ul>
            <li>Rated 5 stars on the AppStore</li>
            <li>
              250+ monthly active users during the NBA season, all organic
              growth.
            </li>
          </ul>
        </div>
        <ImagesCarousel
          orientation="portrait"
          images={images}
          altText={"Basketball Center Screenshot"}
        />
        <div className={styles.project_info}>
          <h2>Technologies Used</h2>
          <h3>Front End / App:</h3>
          <p>
            App&apos;s front-end is made with ReactNative, using native design
            patterns to provide the closest to a native application experience
            possible for users in both Android and iOS.
          </p>
          <ul>
            <li>React Native</li>
            <li>Redux</li>
            <li>SocketIO Client</li>
            <li>Google Analytics</li>
          </ul>
          <h3>Back End:</h3>
          <p>
            The backed was made in NodeJS using Typescript. It handles the in
            app chat, sending notifications to the users about their games or
            when receiving on a chat they are active. It also runs functions
            several times a day to update the data and stats that it gathers
            from multiple NBA apis and scraping the web to be able to show some
            unique and complicated tables to the user.
          </p>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB / Mongoose</li>
            <li>SocketIO</li>
            <li>Expo push notifications</li>
            <li>Rest API</li>
          </ul>
          <h2>Download App</h2>
          <div className={styles.download_container}>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/basketball-center/id1588423237"
              rel="noreferrer"
            >
              View on AppStore
            </a>
          </div>
          <div className={styles.download_container}>
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
        </div>
      </main>
    </div>
  );
};

export default BasketballCenter;
