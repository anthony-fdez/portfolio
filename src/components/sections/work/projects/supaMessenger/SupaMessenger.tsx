import React from "react";
import styles from "../project.module.css";

import SupaMessengerMDX from "./SupaMessengerMDX.mdx";

const SupaMessenger = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SupaMessengerMDX />
      </main>
    </div>
  );
};

export default SupaMessenger;
