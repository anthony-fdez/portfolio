import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./skills.module.css";
import skills from "../../../constants/skills";

const Skills = () => {
  return (
    <div className={styles.content}>
      <Fade>
        <h1>Skills.</h1>
        <br></br>
        <div className={styles.columns}>
          <ul>
            {skills.map((skill) => (
              <li key={`skill-${skill}`}>{skill}</li>
            ))}
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
