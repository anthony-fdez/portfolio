import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./footer.module.css";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <footer id="contact" className={styles.contact_container}>
      <Fade>
        <div className={styles.contact_content}>
          <h1>Contact Me.</h1>
          <ul className={styles.contact_information_list}>
            <li>
              <HiOutlineMail className={styles.icon} />
              <a
                href="mailto:anthonyfdez23@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                anthonyfdez23@gmail.com
              </a>
            </li>
            <li>
              <FaGithub className={styles.icon} />
              <a
                href="https://github.com/anthony-fdez"
                target="_blank"
                rel="noreferrer"
              >
                anthony-fdez
              </a>
            </li>
            <li>
              <AiFillLinkedin className={styles.icon} />
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
            <BsCodeSlash />
            <a
              target="_blank"
              href="https://github.com/anthony-fdez/portfolio"
              rel="noreferrer"
            >
              See the source code for this page.
            </a>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Contact;
