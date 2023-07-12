import React from "react";
import type { NextPage } from "next";
import styles from "../project.module.css";
import ProtypistMDX from "./ProtypistMDX.mdx";

const Protypist: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ProtypistMDX />
      </main>
    </div>
  );
};

export default Protypist;
