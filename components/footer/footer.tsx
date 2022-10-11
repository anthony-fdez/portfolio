import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./footer.module.css";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import MyButton from "../myButton/myButton";

const Contact = () => {
  return (
    <footer id="contact" className={styles.contact_container}>
      <Fade>
        <div className={styles.contact_content}>
          <h1>Contact Me.</h1>
          <ul className={styles.contact_information_list}>
            <MyButton>
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
            </MyButton>

            <MyButton>
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
            </MyButton>

            <MyButton>
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
            </MyButton>
          </ul>
          <br></br>
          <MyButton>
            <div className={styles.this_page_source_container}>
              <BsCodeSlash />
              <a
                target="_blank"
                href="https://github.com/anthony-fdez/portfolio"
                rel="noreferrer"
              >
                See source code.
              </a>
            </div>
          </MyButton>
        </div>
      </Fade>
    </footer>
  );
};

export default Contact;
