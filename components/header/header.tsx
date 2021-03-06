import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    setIsMenuOpen(false);

    if (section)
      section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <header
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
        <span
          onClick={() => setIsMenuOpen(true)}
          className={styles.hamburger_menu}
        >
          <GiHamburgerMenu />
        </span>
        <div
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className={isMenuOpen ? styles.nav_bg_open : styles.nav_bg_closed}
        />
        <nav
          className={
            isMenuOpen ? styles.nav_container_open : styles.nav_container_closed
          }
        >
          <AiOutlineClose
            onClick={() => setIsMenuOpen(false)}
            className={styles.close_menu_button}
          />
          <ul className={styles.navigation_list}>
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
            <li>
              <Link passHref href="/#about">
                <button
                  className={styles.navigation_button}
                  onClick={() => scrollTo("about")}
                >
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link passHref href="/#contact">
                <button
                  className={styles.navigation_button}
                  onClick={() => scrollTo("contact")}
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
