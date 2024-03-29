import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./about.module.css";
// import Unicity from "./sections/Unicity.mdx";
import AboutMDX from "./sections/About.mdx";

const About = (): JSX.Element => {
  return (
    <Fade>
      <div id="about" className={styles.about_container}>
        {/* <h2 className={styles.center}>About & Experience.</h2> */}
        <br></br>
        <AboutMDX />
        {/* <Accordion.Root
          className={styles.AccordionRoot}
          type="single"
          collapsible
        >
          <Accordion.Item className={styles.AccordionItem} value="item-1">
            <AccordionTrigger>
              2022-present Unicity International
            </AccordionTrigger>
            <AccordionContent>
              <div className={styles.job_container}></div>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className={styles.AccordionItem} value="item-2">
            <AccordionTrigger
              // @ts-ignore
              onClick={() => {
                event("experience_expand", {
                  category: "Experience",
                  label: "UAIC",
                });
              }}
            >
              2020-2022 United Automobile Insurance Company
            </AccordionTrigger>
            <AccordionContent>
              <div className={styles.job_container}>
                <UAIC />
              </div>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root> */}
      </div>
    </Fade>
  );
};

export default About;
