import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import styles from "./work.module.css";

const Work = (): JSX.Element => {
  return (
    <div id="work" className={styles.container}>
      <Fade>
        <h2 className={styles.header}>My Work.</h2>
      </Fade>
      <div>
        <Fade>
          <div className={styles.project_container}>
            <div className={styles.project_image_container}>
              <img
                className={styles.project_image}
                alt="Basketball Center Logo"
                src="logos/BBALL_CENTER.png"
              />
            </div>
            <div className={styles.project_info_container}>
              <h2>Basketball Center</h2>
              <p>
                Basketball Center is a mobile app built to help basketball fans
                to stay up to date with everything in the league
              </p>
              <Link passHref href="/basketball-center">
                <button className={styles.learn_more_button}>Learn More</button>
              </Link>
            </div>
          </div>
        </Fade>
        {/* @ts-ignore */}
        <Fade>
          <div className={styles.project_container}>
            <div className={styles.project_image_container}>
              <img
                className={styles.project_image}
                alt="Basketball Center Logo"
                src="logos/protypist.png"
              />
            </div>
            <div className={styles.project_info_container}>
              <h2>ProTypist</h2>
              <p>
                ProTypist is a fully featured typing game, with a multiplayer
                mode and lots of other features
              </p>
              <Link passHref href="/protypist">
                <button className={styles.learn_more_button}>Learn More</button>
              </Link>
            </div>
          </div>
        </Fade>
        <Fade>
          <h2 className={styles.header}>Freelance Projects.</h2>
        </Fade>
        <Fade>
          <div className={styles.project_container}>
            <div className={styles.project_image_container}>
              <img
                className={styles.project_image}
                alt="Basketball Center Logo"
                src="logos/protypist.png"
              />
            </div>
            <div className={styles.project_info_container}>
              <h2>ProTypist</h2>
              <p>
                ProTypist is a fully featured typing game, with a multiplayer
                mode and lots of other features
              </p>
              <Link passHref href="/protypist">
                <button className={styles.learn_more_button}>Learn More</button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Work;
