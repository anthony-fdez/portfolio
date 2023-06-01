import React from "react";
import styles from "./work2.module.css";
import { Fade } from "react-awesome-reveal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import Button from "../../ui/Button/Button";

const Work2 = (): JSX.Element => {
  const projects = [
    {
      name: "Basketball Center",
      bgImage: "basketball-center/home.png",
      iconImage: "logos/BBALL_CENTER.png",
      description: `Basketball Center is a mobile app built to help basketball
      fans to stay up to date with everything in the league.
      Features an in-game chat, personalized notifications for
      favorite teams and players, real time shot-chart that can be
      targeted to specific players with play-by-play info alongside
      it.`,
    },
  ];

  return (
    <div className={styles.container}>
      <h2>My Work.</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry>
          {projects.map((item) => (
            <Fade delay={300} key={item.name}>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <Image
                    height={80}
                    width={80}
                    className={styles.item_header_image}
                    alt="Basketball Center Logo"
                    src="/logos/BBALL_CENTER.png"
                  />
                  <h3 className={styles.item_header_text}>{item.name}</h3>
                </div>
                <p className={styles.description_text}>{item.description}</p>
                <div className={styles.footer}>
                  <Button
                    iconRight={
                      <ArrowRight className={styles.icon_right} size={18} />
                    }
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Fade>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Work2;
