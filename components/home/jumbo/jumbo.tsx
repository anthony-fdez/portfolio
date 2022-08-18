import React from "react";
import { Fade } from "react-awesome-reveal";
import MyButton from "../../myButton/myButton";
import styles from "./jumbo.module.css";
import { Parallax } from "react-scroll-parallax";
import Wave from "react-wavify";

const Jumbo = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Parallax
          translateX={[20, -50]}
          className={styles.background_text_mobile}
        >
          <span>DESIGN, DEVELOP.</span>
        </Parallax>
        <Fade>
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
        </Fade>

        <Wave
          className={styles.wave}
          fill="white"
          paused={false}
          options={{
            height: 20,
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
  );
};
export default Jumbo;
