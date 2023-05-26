import React from "react";
import styles from "./work2.module.css";
import { Fade } from "react-awesome-reveal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Work2 = (): JSX.Element => {
  const items = ["one", "two", "three", "four", "five"];

  return (
    <div className={styles.container}>
      <h2>My Work.</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry>
          {items.map((item) => (
            <Fade delay={300} key={item}>
              <div
                key={item}
                className={styles.item}
                style={item === "two" ? { height: 500 } : {}}
              >
                {item}
              </div>
            </Fade>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Work2;
