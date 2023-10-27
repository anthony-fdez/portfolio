import React from "react";
import styles from "./jumbo.module.css";
import Wave from "react-wavify";
import AnimatedText from "../../ui/animatedText/animatedText";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import useWindowDimensions from "../../../utils/hooks/useWindowDimentions";
import { Fade } from "react-awesome-reveal";
import useIsLoaded from "../../../utils/hooks/useIsLoader";
import Button from "../../ui/Button/Button";
import { Mail } from "react-feather";

const Jumbo = (): JSX.Element => {
  const windowDimensions = useWindowDimensions();

  const { scrollY } = useScroll();
  // @ts-expect-error
  const y = useTransform(scrollY, [0, 300], [0, -windowDimensions.height]);
  const isLoaded = useIsLoaded();

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
              text: "Fullstack software engineer, proficient in React and NodeJS, with many years of experience building scalable enterprise applications.",
            },
          ]}
        />

        <a
          target="_blank"
          href="mailto:anthonyfdez23@gmail.com"
          rel="noreferrer"
        >
          <Button
            iconRight={
              <Mail style={{ marginLeft: 10, marginRight: 5 }} size={18} />
            }
          >
            Contact me
          </Button>
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
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 10,
            amplitude: 50,
            speed: 0.05,
            points: 5,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="rgb(10,10,10)" />
              <stop offset="90%" stopColor="black" />
            </linearGradient>
          </defs>
        </Wave>
        <div className={styles.wave_bg} />
      </motion.div>
    </div>
  );
};
export default Jumbo;
