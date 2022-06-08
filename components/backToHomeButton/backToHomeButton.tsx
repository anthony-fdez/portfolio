import React, { useState } from "react";
import Link from "next/link";
import styles from "./backToHomeButton.module.css";

import { IoMdArrowBack } from "react-icons/io";

const BackToHomeButton = (): JSX.Element => {
  const [helo, setHello] = useState(false);

  return (
    <div className={styles.container}>
      <Link passHref href="/">
        <div className={styles.button}>
          <IoMdArrowBack className={styles.icon} />
          <p>Back To Home</p>
        </div>
      </Link>
    </div>
  );
};

export default BackToHomeButton;
