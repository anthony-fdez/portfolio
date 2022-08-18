import React from "react";
import { Fade } from "react-awesome-reveal";
import MyButton from "../../myButton/myButton";
import styles from "./jumbo.module.css";
import { Parallax } from "react-scroll-parallax";

const Jumbo = (): JSX.Element => {
  return (
    <Fade>
      <div className={styles.container}>
        <Parallax className={styles.background_text_design} speed={-20}>
          <span>DESIGN IT.</span>
        </Parallax>
        <Parallax className={styles.background_text_create} speed={-10}>
          <span>DEVELOP IT.</span>
        </Parallax>
        <Parallax className={styles.background_text_mobile} speed={-20}>
          <span>DESIGN, DEVELOP.</span>
        </Parallax>

        <h3>Hi, I&apos;m Anthony!</h3>
        <h1>
          I&apos;m a fullstack developer. Focused on building better software
          every day.
        </h1>
        <MyButton>
          <a
            target="_blank"
            href="mailto:anthonyfdez23@gmail.com"
            className={styles.button}
            rel="noreferrer"
          >
            Contact Me
          </a>
        </MyButton>
      </div>
    </Fade>
  );
};
export default Jumbo;
