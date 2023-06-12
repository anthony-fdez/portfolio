import React from "react";
import styles from "../project.module.css";
import ImagesCarousel from "@/ui/imagesCarousel/imagesCarousel";

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
        <h1 className={styles.header}>DLS Fixit</h1>
        <span className={styles.live_preview_link}>
          Live Website:{" "}
          <a
            className="link"
            target="_blank"
            href="https://dlsfixit.com/"
            rel="noreferrer"
          >
            https://dlsfixit.com/
          </a>
        </span>
        <div className={styles.images_container}>
          <ImagesCarousel images={images} altText="DLSFixit Screenshot" />
        </div>
        <div className={styles.paragraph}>
          <p>
            DLS Fixit is an informational website showcasing the the services
            that the company offers, and information about the company.
          </p>
        </div>

        <h2 className={styles.secondary_header}>Technologies used:</h2>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Redux</li>
          <li>Google Analytics</li>
          <li>Bootstrap</li>
        </ul>
        <br></br>
      </main>
    </div>
  );
};

export default Dls;
