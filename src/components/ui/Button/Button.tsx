import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: JSX.Element | string;
  iconRight?: JSX.Element;
}

const Button = ({ children, iconRight }: Props): JSX.Element => {
  return (
    <button className={styles.button}>
      {children}
      {iconRight && <div className={styles.icon_right}>{iconRight}</div>}
    </button>
  );
};

export default Button;
