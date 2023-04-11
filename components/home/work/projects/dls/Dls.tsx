import React from "react";
import styles from "../project.module.css";
import ImagesCarousel from "../../../../imagesCarousel/imagesCarousel";

const Dls = (): JSX.Element => {
  const images: string[] = [
    "/dls/1.png",
    "/dls/2.png",
    "/dls/3.png",
    "/dls/4.png",
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>DLS Fixit</h1>
          <p>
            DLS Fixit is an informational website showcasing the the services
            that the company offers, and information about the company.
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
    </div>
  );
};

export default Dls;
