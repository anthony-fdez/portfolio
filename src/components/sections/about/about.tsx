import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./about.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import AccordionTrigger from "./helpers/AccordionTrigger";
import AccordionContent from "./helpers/AccordionContent";

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
        <Accordion.Root
          className={styles.AccordionRoot}
          type="single"
          collapsible
        >
          <Accordion.Item className={styles.AccordionItem} value="item-1">
            <AccordionTrigger>
              2022-present Unicity International
            </AccordionTrigger>
            <AccordionContent>
              <div className={styles.job_container}>
                <h3>Frontend Software Engineer</h3>
              </div>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className={styles.AccordionItem} value="item-2">
            <AccordionTrigger>
              2020-2022 United Automobile Insurance Company
            </AccordionTrigger>
            <AccordionContent>
              <div className={styles.job_container}>
                <h3>Frontend Software Engineer</h3>
                <ul>
                  <li>
                    As a front-end engineer, I was assigned to design and
                    develop robust user experiences.
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
                        codebases to use new technologies, up to the new
                        industry standards.
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
                    Worked with object oriented (OOP) backend codebases in PHP
                    and JAVA
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </Fade>
  );
};

export default About;
