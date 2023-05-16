import React from "react";
import styles from "./jumbo.module.css";
import Wave from "react-wavify";
import AnimatedText from "../../animatedText/animatedText";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import useWindowDimensions from "../../../utils/hooks/useWindowDimentions";
import { Fade } from "react-awesome-reveal";
import useIsLoaded from "../../../utils/hooks/useIsLoader";

const Jumbo = (): JSX.Element => {
  const windowDimensions = useWindowDimensions();

  const { scrollY } = useScroll();
  // @ts-ignore
  const y = useTransform(scrollY, [0, 300], [0, -windowDimensions.height]);
  const isLoaded = useIsLoaded();

  console.log(isLoaded);

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={styles.container}>
      <Fade triggerOnce delay={1500} className={styles.glow_1_container}>
        <div className={styles.glow_1} />
      </Fade>
      <Fade className={styles.glow_2_container}>
        <div className={styles.glow_2} />
      </Fade>
      <div className={styles.glow_2} />
      <div className={styles.content}>
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
      </div>
      <motion.div
        style={{ y: smoothY }}
        className={
          isLoaded ? styles.wave_container_shown : styles.wave_container_hidden
        }
      >
        <Wave
          className={styles.wave}
          fill="rgb(20,20,20)"
          paused={false}
          options={{
            height: 30,
            amplitude: 80,
            speed: 0.05,
            points: 3,
          }}
        />
        <div className={styles.wave_bg} />
      </motion.div>
    </div>
  );
};
export default Jumbo;
