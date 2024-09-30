import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const checkboxRef = useRef(null);
  const navRef = useRef(null);

  const handleScroll = () => {
    // Automatically close the navbar on scroll
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  const handleClickOutside = (event) => {
    // If click is outside of the navigation, uncheck the checkbox
    if (navRef.current && !navRef.current.contains(event.target)) {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Add click event listener for detecting clicks outside the navbar
    window.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up the event listeners
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div>
        <a className={styles.nav__home} href="/">
          FJ
        </a>
      </div>
      <div className={styles.nav__ham}>
        <input
          type="checkbox"
          className={styles.nav__checkbox}
          id="checkbox_toggle"
          ref={checkboxRef}
        />
        <label htmlFor="checkbox_toggle" className={styles.nav__hamburgerButton}>
          <ul>
            <li className={styles.hamburgerButton__topStroke}></li>
            <li className={styles.hamburgerButton__centerStroke}></li>
            <li className={styles.hamburgerButton__bottomStroke}></li>
          </ul>
        </label>
        <div className={styles.nav__content}>
          <ul>
            <li>
              <Link to="/photo-gallery">View Gallery</Link>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
