import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./jumbo.module.css";
import Wave from "react-wavify";
import AnimatedText from "../../animatedText/animatedText";

const Jumbo = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Fade>
          <AnimatedText
            color="white"
            text={[
              { type: "heading3", text: "Hi, I'm Anthony!" },
              {
                type: "heading1",
                text: "I'm a fullstack software engineer with 3+ years of experience building production ready applications.",
              },
            ]}
          />

          <a
            target="_blank"
            href="mailto:anthonyfdez23@gmail.com"
            className={styles.button}
            rel="noreferrer"
          >
            Contact Me
          </a>
        </Fade>

        <Wave
          className={styles.wave}
          fill="rgb(20,20,20)"
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
