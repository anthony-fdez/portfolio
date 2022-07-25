import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./about.module.css";

const About = (): JSX.Element => {
  return (
    <Fade>
      <div id="about" className={styles.about_container}>
        <h1>Abbout & Expirience.</h1>
        <br></br>
        <p>
          I&apos;m a person that is really interested in making software, I
          started with programming around 2019 only making little websites with
          HTML and CSS. After a couple weeks I started learning JavaScript and I
          was hooked. I decided that that was what I wanted to for a living
          since I liked it that much, so I decided to major in computer science.
        </p>
        <br></br>
        <h2>School</h2>
        <p>
          I started going to Miami Dade College in 2019, majoring in computer
          science. Graduated in 2021 with my Associates in CS with a GPA of 3.9
        </p>
        <br></br>
        <p>
          Starting 2022 I transferred to Florida International University to get
          my Bachelors Degree. My expected graduation date is around december
          2023.
        </p>
        <br></br>
        <h2>Work Experience</h2>
        <p>
          I got an internship at United Automobile Insurance Company doing web
          development. At the time my internship expired I got hired as a Junior
          Web Developer and I am still working there.
        </p>
        <br></br>
        <ul>
          <p>
            Responsibilities I have at the job and technologies I worked with:
          </p>
          <li>
            I worked on designing and developing their new{" "}
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
            I migrated several websites UIs from old and outdated JQuery to
            ReactJS. Including sensitive websites such as the customer portal.
          </li>
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
    </Fade>
  );
};

export default About;
