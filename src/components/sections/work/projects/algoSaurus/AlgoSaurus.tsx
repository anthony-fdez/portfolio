import React from "react";
import styles from "../project.module.css";
import AlgoSaurusMDX from "./AlgoSaurusMDX.mdx";

const AlgoSaurus = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AlgoSaurusMDX />
      </main>
    </div>
  );
};

export default AlgoSaurus;
