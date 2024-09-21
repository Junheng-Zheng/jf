import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <div>
        <a className={styles.nav__home} href ="/">FJ</a>
      </div>
      <div className={styles.nav__ham}>
        <input type="checkbox" className={styles.nav__checkbox} id="checkbox_toggle" />
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
              <Link to="/photo-gallery">View Gallery</Link> {/* Updated Link */}
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
