import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./about.module.css";

const About = (): JSX.Element => {
  return (
    <Fade>
      <div id="about" className={styles.about_container}>
        <h2 className={styles.center}>About & Experience.</h2>
        <br></br>
        <p>
          I am a full stack software engineer with 3+ years of experience
          building fullstack websites and mobile applications. I have worked
          alone, and with other teams of professional developers creating modern
          and robust software. I mainly work on frontend codebases using ReactJS
          , but I can most certainly learn any JS framework and tool. I am also
          experienced with backend languages and frameworks like NodeJS, as well
          as SQL and noSQL databases.
        </p>

        <h2 className={styles.professional_experience_title}>
          Professional Experience
        </h2>
        <div className={styles.job_container}>
          <span>Unicity International, 2022-present</span>
        </div>
        <div className={styles.job_container}>
          <span>United Automobile Insurance Company, 2020-2022</span>
          <h3>Frontend Software Engineer/Analyst</h3>

          <ul>
            <li>
              As a front-end engineer, I was assigned to design and develop
              robust user experiences.
              <ul>
                <li>
                  Designed and developed{" "}
                  <a
                    className="link"
                    target="_blank"
                    href="https://uaig.net"
                    rel="noreferrer"
                  >
                    a new homepage
                  </a>
                  . Built from scratch using ReactJS and TypeScript. With much
                  improved SEO and user interaction.
                </li>
                <li>
                  Migrated several internal websites and tools from old
                  codebases to use new technologies, up to the new industry
                  standards.
                </li>
              </ul>
            </li>
            <br></br>
            <li>
              Integrated backend APIs (PHP, NodeJS, JAVA). And worked with the
              backend team directly to create the best infrastructure possible
              for our APIs.
            </li>
            <li>
              Worked with object oriented (OOP) backend codebases in PHP and
              JAVA
            </li>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default About;
