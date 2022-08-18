import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./about.module.css";

const About = (): JSX.Element => {
  const EducationTable = (): JSX.Element => {
    // I had to make my own table using div's because for some reason
    // I get a hidration error when using a table. This seems like a problem
    // not fixed yet in react 18.

    return (
      <>
        <h2 className={styles.center}>Education.</h2>
        <div className={styles.table}>
          <div style={{ border: "none" }} className={styles.tr}>
            <div className={styles.first_td}>2022-01 - Present</div>
            <div className={styles.second_td}>
              <h3>
                Majoring in Computer Science (Bachelor of Computer Science)
              </h3>
              <p>Florida International University South Campus, Miami, FL</p>
              <br></br>
              <p>
                <strong>Expected Graduation:</strong> 2023
              </p>
            </div>
          </div>
          <div className={styles.tr}>
            <div className={styles.first_td}>2019-08 - 2021-12</div>
            <div className={styles.second_td}>
              <h3>Major in Computer Science (Associates Degree)</h3>
              <p>Miami Dade College Kendall Campus, Miami, FL</p>
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
        <h2 className={styles.center}>Work Experience.</h2>
        <div className={styles.table}>
          <div style={{ border: "none" }} className={styles.tr}>
            <div className={styles.first_td}>2021-10 - Present </div>
            <div className={styles.second_td}>
              <h3>Junior Web Developer</h3>
              <p>United Automobile Insurance Company, Miami Gardens, FL</p>
              <br></br>
              <h4>Key Responsibilities.</h4>
              <ul>
                <li>
                  Design and develop a new{" "}
                  <a
                    className="link"
                    target="_blank"
                    href="https://uaig.net"
                    rel="noreferrer"
                  >
                    home page.{" "}
                  </a>
                  It was built from scratch using ReactJs and TypeScript.
                </li>
                <li>
                  Migrated several websites UIs from old and outdated JQuery to
                  ReactJS.
                  <ul>
                    <li>
                      This included sensitive websites such as the customer
                      portal.
                    </li>
                  </ul>
                </li>
                <br></br>
                <li>
                  Worked on internal tools that increased the company&apos;s
                  productivity.
                </li>
                <li>
                  I worked integrating apis and did some backend coding as well.
                  (NodeJs and PHP)
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.tr}>
            <div className={styles.first_td}>2021-04 – 2021-10</div>
            <div className={styles.second_td}>
              <h3>Web Development Intern</h3>
              <p>United Automobile Insurance Company, Miami Gardens, FL</p>
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
          the first time in 2019. It all started by making little websites with
          HTML and CSS just for fun; however, after a couple of weeks I got more
          invested, and I started learning JavaScript. At that point, I realized
          that this was what I wanted to do for a living, so I decided to major
          in Computer Science.
        </p>
        <br></br>
        <EducationTable />
        <br></br>
        <WorkTable />
      </div>
    </Fade>
  );
};

export default About;
