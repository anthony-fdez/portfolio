import styles from "./work.module.css";

const Work = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>My Work.</h2>
      <div>
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
              Basketball Center is a mobile app built to help basketball fans to
              stay up to date with everything in the league
            </p>
            <button className={styles.learn_more_button}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
