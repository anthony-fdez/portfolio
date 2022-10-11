import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./about.module.css";

const About = (): JSX.Element => {
  const EducationTable = (): JSX.Element => {
    // I had to make my own table using div's because for some reason
    // I get a hydration error when using a table. This seems like a problem
    // not fixed yet in react 18.

    return (
      <>
        <h2 className={styles.center}>Education.</h2>
        <div className={styles.table}>
          <div className={styles.tr}>
            <div className={styles.first_td}>2019-08 - 2021-12</div>
            <div className={styles.second_td}>
              <h3>Major in Computer Science (AA)</h3>
              <p>Miami Dade College, Miami, FL</p>
              <br></br>
              <p>
                <strong>Graduation:</strong> 2021
              </p>
              <p>
                <strong>GPA:</strong> 3.9
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const WorkTable = (): JSX.Element => {
    return (
      <>
        <h2 className={styles.center}>Professional Experience.</h2>
        <div className={styles.table}>
          <div style={{ border: "none" }} className={styles.tr}>
            <div className={styles.first_td}>2020 - Present</div>
            <div className={styles.second_td}>
              <h3>Frontend Software Engineer/Analyst</h3>
              <p>United Automobile Insurance Company, Miami Gardens, FL</p>
              <br></br>
              <h4>Key Responsibilities.</h4>

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
                      . Built from scratch using ReactJS and TypeScript. With
                      much improved SEO and user interaction.
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
                  Integrated backend APIs (PHP, NodeJS, JAVA). And worked with
                  the backend team directly to create the best infrastructure
                  possible for our APIs.
                </li>
                <li>
                  Worked with object oriented (OOP) backend codebases in PHP and
                  JAVA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Fade>
      <div id="about" className={styles.about_container}>
        <h1 className={styles.center}>About & Experience.</h1>
        <br></br>
        <p>
          My biggest passion is creating software. I experienced programming for
          the first time in 2018. It all started by making little websites with
          HTML and CSS just for fun; however, after a couple of weeks I got more
          invested, and I started learning JavaScript. At that point, I realized
          that this was what I wanted to do for a living, so I decided to major
          in Computer Science.
        </p>
        <br></br>
        <WorkTable />
        <br></br>
        <EducationTable />
      </div>
    </Fade>
  );
};

export default About;
