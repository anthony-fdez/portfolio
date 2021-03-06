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
            <Link passHref href="/basketball-center">
              <img
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="basketball-center/home.png"
              />
            </Link>
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
        <Fade>
          <div className={styles.project_container}>
            <Link passHref href="/protypist">
              <img
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="protypist/home.png"
              />
            </Link>
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
        <br></br>
        <Fade>
          <h2 className={styles.header}>Freelance Projects.</h2>
        </Fade>
        <Fade>
          <div className={styles.project_container}>
            <Link passHref href="/dls">
              <img
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="dls/home.png"
              />
            </Link>

            <div className={styles.project_image_container}>
              <img
                className={styles.project_image}
                alt="Basketball Center Logo"
                src="logos/dls.png"
              />
            </div>
            <div className={styles.project_info_container}>
              <h2>DLS Fixit</h2>
              <p>
                DLSFixis is a doors and locks repair and installation company
                located in the south Florida area.
              </p>
              <Link passHref href="/dls">
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
