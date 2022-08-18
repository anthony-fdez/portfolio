import React from "react";
import styles from "./animatedText.module.css";

interface Props {
  children: JSX.Element;
}

const Wrapper = ({ children }: Props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className={styles.word_wrapper}>{children}</span>;
};

export default Wrapper;
