import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Footer from "../footer/footer";

// Icons
import { MdPermContactCalendar } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import MyButton from "../myButton/myButton";
import NoScrollLink from "../noScrollLink/noScrollLink";

const sideMenuVariants = {
  open: {
    opacity: 1,
    x: "-100%",
    transition: { duration: 0.6, type: "spring" },
  },
  closed: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, type: "spring" },
  },
};

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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToBottom = () => {
    window.scrollTo(0, 100000);
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
        <MyButton>
          <NoScrollLink passHref href="/">
            <span
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
              className={styles.header_title}
            >
              Portfolio.
            </span>
          </NoScrollLink>
        </MyButton>

        <MyButton>
          <span
            onClick={() => setIsMenuOpen(true)}
            className={styles.hamburger_menu}
          >
            <GiHamburgerMenu />
          </span>
        </MyButton>

        <div
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className={isMenuOpen ? styles.nav_bg_open : styles.nav_bg_closed}
        />
        <motion.div
          animate={isMobile && (isMenuOpen ? "open" : "closed")}
          variants={sideMenuVariants}
          className={styles.nav_container_open}
          initial={false}
        >
          <AiOutlineClose
            onClick={() => setIsMenuOpen(false)}
            className={styles.close_menu_button}
          />

          <ul className={styles.navigation_list}>
            <li>
              <MyButton>
                <NoScrollLink passHref href="/work">
                  <button
                    className={styles.navigation_button}
                    // onClick={() => scrollTo("work")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MdWeb className={styles.menu_icon} />
                    Work
                  </button>
                </NoScrollLink>
              </MyButton>
            </li>
            <li>
              <MyButton>
                <NoScrollLink passHref href="/about">
                  <button
                    className={styles.navigation_button}
                    // onClick={() => scrollTo("about")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <AiOutlineInfoCircle className={styles.menu_icon} />
                    About
                  </button>
                </NoScrollLink>
              </MyButton>
            </li>
            <li>
              <MyButton>
                <button
                  onClick={scrollToBottom}
                  className={styles.navigation_button}
                  id={styles.navigation_button_contact}
                >
                  <MdPermContactCalendar className={styles.menu_icon} />
                  Contact
                </button>
              </MyButton>
            </li>
          </ul>
          <div className={styles.footer_container}>
            <Footer />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
