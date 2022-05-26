import React from "react";
import styles from "./header.module.css";

const Header = () => {
  const scrollTo = (elementId: string) => {
    const section = document.querySelector(`#${elementId}`);

    if (section)
      section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.header_content}>
        <span className={styles.header_title}>Portfolio.</span>
        <nav>
          <ul className={styles.navigation_list} role="navigation">
            <li>
              <button
                className={styles.navigation_button}
                onClick={() => scrollTo("work")}
              >
                Work
              </button>
            </li>
            <button
              className={styles.navigation_button}
              onClick={() => scrollTo("about")}
            >
              About
            </button>
            <button
              className={styles.navigation_button}
              onClick={() => scrollTo("contact")}
            >
              Contact
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
