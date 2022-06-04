import Link from "next/link";
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
        <Link passHref href="/">
          <span style={{ cursor: "pointer" }} className={styles.header_title}>
            Portfolio.
          </span>
        </Link>
        <nav>
          <ul className={styles.navigation_list} role="navigation">
            <li>
              <Link passHref href="/#work">
                <button
                  className={styles.navigation_button}
                  onClick={() => scrollTo("work")}
                >
                  Work
                </button>
              </Link>
            </li>
            <Link passHref href="/#about">
              <button
                className={styles.navigation_button}
                onClick={() => scrollTo("about")}
              >
                About
              </button>
            </Link>
            <Link passHref href="/#contact">
              <button
                className={styles.navigation_button}
                onClick={() => scrollTo("contact")}
              >
                Contact
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
