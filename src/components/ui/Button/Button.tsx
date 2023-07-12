import React from "react";
import styles from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
  iconRight?: JSX.Element;
}

const Button = ({ children, iconRight, ...args }: Props): JSX.Element => {
  return (
    <button style={{ color: "white" }} {...args} className={styles.button}>
      {children}
      {iconRight && <div className={styles.icon_right}>{iconRight}</div>}
    </button>
  );
};

export default Button;
