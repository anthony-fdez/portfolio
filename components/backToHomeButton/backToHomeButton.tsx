import React from "react";
import styles from "./backToHomeButton.module.css";

import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

const BackToHomeButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div onClick={() => router.back()} className={styles.button}>
        <IoMdArrowBack className={styles.icon} />
        <p>Back</p>
      </div>
    </div>
  );
};

export default BackToHomeButton;
