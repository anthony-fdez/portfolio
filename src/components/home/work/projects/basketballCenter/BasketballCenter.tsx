import React from "react";
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
      <main className={styles.main}>
        <h1 className={styles.header}>Basketball Center</h1>
        <div className={styles.images_container}>
          <ImagesCarousel
            orientation="portrait"
            images={images}
            altText={"Basketball Center Screenshot"}
          />
        </div>
        <div className={styles.paragraph}>
          <p>
            Basketball Center is a sophisticated mobile application designed to
            keep basketball enthusiasts informed on the latest happenings within
            the league. The app boasts an array of features, including an
            in-game chat for real-time discussions, customizable notifications
            tailored to users&apos; preferred teams and players, and an
            interactive shot-chart that provides detailed, player-specific data
            accompanied by play-by-play information.
          </p>
        </div>

        <ul>
          <li>Rated 5 stars on the AppStore</li>
          <li>
            250+ monthly active users during the NBA season, all organic growth.
          </li>
        </ul>

        <h2 className={styles.secondary_header}>Technologies Used</h2>
        <h3 className={styles.tertiary_header}>Front End / App:</h3>
        <div className={styles.paragraph}>
          <p>
            App&apos;s front-end is made with ReactNative, using native design
            patterns to provide the closest to a native application experience
            possible for users in both Android and iOS.
          </p>
        </div>
        <ul>
          <li>React Native</li>
          <li>Redux</li>
          <li>SocketIO Client</li>
          <li>Google Analytics</li>
        </ul>
        <h3 className={styles.tertiary_header}>Back End:</h3>
        <div className={styles.paragraph}>
          <p>
            The backed was made in NodeJS using Typescript. It handles the in
            app chat, sending notifications to the users about their games or
            when receiving on a chat they are active. It also runs functions
            several times a day to update the data and stats that it gathers
            from multiple NBA apis and scraping the web to be able to show some
            unique and complicated tables to the user.
          </p>
        </div>
        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB / Mongoose</li>
          <li>SocketIO</li>
          <li>Expo push notifications</li>
          <li>Rest API</li>
        </ul>
        <h2 className={styles.secondary_header}>Download App</h2>
        <div className={styles.download_container}>
          <a
            className={styles.link}
            target="_blank"
            href="https://apps.apple.com/us/app/basketball-center/id1588423237"
            rel="noreferrer"
          >
            View on AppStore
          </a>
        </div>
        <div className={styles.download_container}>
          <a
            className={styles.link}
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
          As of right now the source code for Basketball Center is closed source
        </p>
      </main>
    </div>
  );
};

export default BasketballCenter;
