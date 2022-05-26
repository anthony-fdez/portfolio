import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.content}>
      {/* @ts-ignore */}
      <Fade>
        <h1>Skills.</h1>
        <br></br>
        <div className={styles.columns}>
          <ul>
            <li>
              <span>HTML5/CSS</span>
            </li>
            <li>
              <span>TypeScript</span>
            </li>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>NextJs</span>
            </li>
            <li>
              <span>React Native</span>
            </li>
            <li>
              <span>NodeJS</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>

            <li>
              <span>REST APIs</span>
            </li>
            <li>
              <span>JSON</span>
            </li>
            <li>
              <span>Redux</span>
            </li>
            <li>
              <span>Git</span>
            </li>
            <li>
              <span>Linux</span>
            </li>
            <li>
              <span>Express JS</span>
            </li>
            <li>
              <span>UI Design</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>Fluent in Spanish</span>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
