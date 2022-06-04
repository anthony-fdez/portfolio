import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import BackToHomeButton from "../../components/backToHomeButton/backToHomeButton";
import styles from "./dls.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Dls: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DLS Fixit | Anthony Fernandez Developer Portfolio</title>
        <meta
          name="DLS Fixit"
          content="Description and information about the project DLSFixit, developed by Anthony Fernandez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BackToHomeButton />
        <br></br>
        <h1>DLS Fixit</h1>
        <p>
          DLS Fixit is an informational website showcasing the the services that
          the company offers, and information about the company.
        </p>
        <br></br>
        <p>
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
              src="/dls/1.png"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              className={styles.image}
              alt="Basketball Center screenshot 1"
              src="/dls/2.png"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              className={styles.image}
              alt="Basketball Center screenshot 1"
              src="/dls/3.png"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              className={styles.image}
              alt="Basketball Center screenshot 1"
              src="/dls/4.png"
            />
          </SwiperSlide>
        </Swiper>
        <br></br>{" "}
        <div className={styles.modal_content_container}>
          <h2>Technologies Used</h2>
          <br></br>
          <h3>Front End / App:</h3>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Redux</li>
            <li>Google Analytics</li>
          </ul>
          <br></br>
        </div>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Dls;
