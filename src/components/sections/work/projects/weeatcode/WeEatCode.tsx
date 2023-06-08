import React from "react";
import styles from "../project.module.css";
import WeEatCodeMDX from "./WeEatCodeMDX.mdx";

const WeEatCode = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <WeEatCodeMDX />
      </main>
    </div>
  );
};

export default WeEatCode;
