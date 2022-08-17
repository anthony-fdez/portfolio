import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./work.module.css";
import NoScrollLink from "../../noScrollLink/noScrollLink";
import MyButton from "../../myButton/myButton";

const Work = (): JSX.Element => {
  return (
    <div id="work" className={styles.container}>
      <Fade>
        <h2 className={styles.header}>My Work.</h2>
      </Fade>
      <div>
        <Fade>
          <div className={styles.project_container}>
            <NoScrollLink passHref href="/basketball-center">
              <img
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="basketball-center/home.png"
              />
            </NoScrollLink>

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
              <MyButton>
                <NoScrollLink passHref href="/basketball-center">
                  <button className={styles.learn_more_button}>
                    Learn More
                  </button>
                </NoScrollLink>
              </MyButton>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className={styles.project_container}>
            <NoScrollLink passHref href="/protypist">
              <img
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="protypist/home.png"
              />
            </NoScrollLink>
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
              <MyButton>
                <NoScrollLink passHref href="/protypist">
                  <button className={styles.learn_more_button}>
                    Learn More
                  </button>
                </NoScrollLink>
              </MyButton>
            </div>
          </div>
        </Fade>
        <br></br>
        <Fade>
          <h2 className={styles.header}>Freelance Projects.</h2>
        </Fade>
        <Fade>
          <div className={styles.project_container}>
            <NoScrollLink passHref href="/dls">
              <img
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="dls/home.png"
              />
            </NoScrollLink>

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
                DLSFixit is a doors and locks repair and installation company
                located in the south Florida area.
              </p>
              <MyButton>
                <NoScrollLink passHref href="/dls">
                  <button className={styles.learn_more_button}>
                    Learn More
                  </button>
                </NoScrollLink>
              </MyButton>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Work;
