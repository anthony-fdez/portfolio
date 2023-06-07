import React from "react";
import { AlertCircle } from "react-feather";
import styles from "./alert.module.css";

interface IAlertProps {
  title: string;
  children: string;
}

const Alert = ({ title, children }: IAlertProps) => {
  return (
    <div
      style={{
        backgroundColor: "#e245301b",
        color: "#e24630",
      }}
      className={styles.container}
    >
      <div className={styles.icon_container}>
        <AlertCircle size={20} />
      </div>
      <div>
        <h3 style={{ color: "#e24630" }}>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Alert;
