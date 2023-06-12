import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./footer.module.css";
import { GitHub, Linkedin, Mail } from "react-feather";

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
                LinkedIn
              </a>
            </li>
          </ul>
          <div className={styles.footer_text}>
            <p>
              Made it to the bottom, huh? Nice! If you liked what you saw, why
              not take a peek under the hood? Check out my{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/anthony-fdez/portfolio"
                style={{ color: "var(--secondary-color)" }}
              >
                source code!
              </a>
            </p>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Contact;
