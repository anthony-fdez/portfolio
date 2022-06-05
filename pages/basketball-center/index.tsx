import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import BackToHomeButton from "../../components/backToHomeButton/backToHomeButton";
import styles from "./basketball-center.module.css";

import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Fade } from "react-awesome-reveal";

const BasketballCenter: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basketball Center | Anthony Fernandez Developer Portfolio</title>
        <meta
          name="Basketball Center"
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
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView="auto"
          >
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/1.png"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/2.png"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/3.png"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/4.png"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/5.png"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/6.png"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/7.png"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src="/basketball-center/8.png"
              />
            </SwiperSlide>
          </Swiper>
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

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default BasketballCenter;
