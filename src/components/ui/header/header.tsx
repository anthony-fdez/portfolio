import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import NavigationMenuComponent from "./NavigationMenu/NavigationMenu";

interface Props {
  title?: string;
  simple?: boolean;
}

const Header = ({ title, simple }: Props) => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <Link href="/">
          <span
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            className={styles.header_title}
          >
            {title ? title : "Portfolio."}
          </span>
        </Link>
        {!simple && <NavigationMenuComponent />}
      </div>
    </header>
  );
};

export default Header;
