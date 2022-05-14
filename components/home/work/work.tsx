import { Fade } from "react-awesome-reveal";
import styles from "./work.module.css";

const Work = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* @ts-ignore */}
      <Fade>
        <h2 className={styles.header}>My Work.</h2>
      </Fade>
      <div>
        {/* @ts-ignore */}
        <Fade>
          <div className={styles.project_container}>
            <div className={styles.project_image_container}>
              <img
                className={styles.project_image}
                alt="Basketball Center Logo"
                src="logos/BBALL_CENTER.png"
              />
            </div>
            <div className={styles.project_info_container}>
              <h2>Basketball Center</h2>
              <p>
                Basketball Center is a mobile app built to help basketball fans
                to stay up to date with everything in the league
              </p>
              <button className={styles.learn_more_button}>Learn More</button>
            </div>
          </div>
        </Fade>
        {/* @ts-ignore */}
        <Fade>
          <div className={styles.project_container}>
            <div className={styles.project_image_container}>
              <img
                className={styles.project_image}
                alt="Basketball Center Logo"
                src="logos/protypist.png"
              />
            </div>
            <div className={styles.project_info_container}>
              <h2>ProTypist</h2>
              <p>
                ProTypist is a fully featured typing game, with a multiplayer
                mode and lots of other features
              </p>
              <button className={styles.learn_more_button}>Learn More</button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Work;
