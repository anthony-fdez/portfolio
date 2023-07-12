import React from "react";
import styles from "../project.module.css";

import BasketballCenterMDX from "./BasketballCenterMDX.mdx";

const BasketballCenter = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <BasketballCenterMDX />
      </main>
    </div>
  );
};

export default BasketballCenter;
