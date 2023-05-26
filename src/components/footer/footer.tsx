import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./footer.module.css";

import MyButton from "../ui/Button/Button";
import { Code, GitHub, Linkedin, Mail } from "react-feather";

const Contact = () => {
  return (
    <footer id="contact" className={styles.contact_container}>
      <Fade>
        <div className={styles.contact_content}>
          <h1>Contact Me.</h1>
          <ul className={styles.contact_information_list}>
            <li>
              <Mail className={styles.icon} />
              <a
                href="mailto:anthonyfdez23@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                anthonyfdez23@gmail.com
              </a>
            </li>

            <li>
              <GitHub className={styles.icon} />
              <a
                href="https://github.com/anthony-fdez"
                target="_blank"
                rel="noreferrer"
              >
                anthony-fdez
              </a>
            </li>

            <li>
              <Linkedin className={styles.icon} />
              <a
                href="https://www.linkedin.com/in/anthony-fernandez-556622201/"
                target="_blank"
                rel="noreferrer"
              >
                My LinkedIn Profile
              </a>
            </li>
          </ul>
          <br></br>
          <div className={styles.this_page_source_container}>
            <Code />
            <a
              target="_blank"
              href="https://github.com/anthony-fdez/portfolio"
              rel="noreferrer"
            >
              See source code.
            </a>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Contact;
