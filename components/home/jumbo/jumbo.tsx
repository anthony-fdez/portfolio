import React from "react";
import { Fade } from "react-awesome-reveal";
import MyButton from "../../myButton/myButton";
import styles from "./jumbo.module.css";
import { Parallax } from "react-scroll-parallax";
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
