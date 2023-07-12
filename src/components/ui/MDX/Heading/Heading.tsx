import React from "react";
import styles from "./heading.module.css";

export const H1 = (props: any) => <h1 className={styles.h1} {...props} />;
export const H2 = (props: any) => <h2 className={styles.h2} {...props} />;
export const H3 = (props: any) => <h3 className={styles.h3} {...props} />;
export const H4 = (props: any) => <h4 className={styles.h4} {...props} />;
export const H5 = (props: any) => <h5 className={styles.h5} {...props} />;

const Heading = (props: any) => <h1 {...props} />;

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;

export default Heading;
