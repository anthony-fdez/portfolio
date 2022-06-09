import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (elementId: string) => {
    const section = document.querySelector(`#${elementId}`);

    if (section)
      section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className={
        scrollPosition < 10
          ? styles.header_container_light
          : styles.header_container
      }
    >
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
