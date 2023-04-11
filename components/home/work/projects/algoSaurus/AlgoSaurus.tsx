import React from "react";
import styles from "../project.module.css";

import ImagesCarousel from "../../../../imagesCarousel/imagesCarousel";
import { GitHub } from "react-feather";

const AlgoSaurus = (): JSX.Element => {
  const images: string[] = [
    "/algo-saurus/1.webp",
    "/algo-saurus/2.webp",
    "/algo-saurus/3.webp",
    "/algo-saurus/4.webp",
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>AlgoSaurus</h1>
          <p>
            AlgoSaurus is learning tool to help people visualize complex sorting
            algorithms. It allows to slow down the algorithm and show a graph as
            the algorithm is doing its magic sorting the data.
          </p>
          <br></br>
          <p>
            We also show a description of how the algorithm works with simple
            terms, as well as a code snippet of every algorithm in a variety of
            programming languages.
          </p>
          <br></br>
          <br></br>
          <h2>Hackathon winner project</h2>
          <p>
            This project was developed by a team of 4 people including me, at
            ShellHacks, one of the biggest hackathons in Florida. We placed 3rd
            place overall among 200+ other teams.
          </p>
        </div>
        <p className={styles.live_preview_link}>
          Live Website:{" "}
          <a
            className="link"
            target="_blank"
            href="https://algo-saurus.web.app/"
            rel="noreferrer"
          >
            https://algo-saurus.web.app/
          </a>
        </p>
        <ImagesCarousel images={images} altText={"ProTypist Screenshot"} />
        <div className={styles.project_info}>
          <h2>Technologies Used</h2>
          <ul>
            <li>ReactJS</li>
            <li>TypeScript</li>
            <li>Framer Motion</li>
            <li>Victory Charts</li>
          </ul>
        </div>
        <h2>Source Code</h2>
        <div className={styles.github_container}>
          <GitHub />
          <a
            target="_blank"
            href="https://github.com/fidel-bello/AlgoSaurus"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </main>
    </div>
  );
};

export default AlgoSaurus;
