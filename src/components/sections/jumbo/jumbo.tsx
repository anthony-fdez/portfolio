import React from "react";
import { Mail } from "react-feather";
import AnimatedText from "../../ui/animatedText/animatedText";
import Button from "../../ui/Button/Button";
import styles from "./jumbo.module.css";

const Jumbo = (): JSX.Element => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};
export default Jumbo;
