import React from "react";
import styles from "./Navigation.module.css";

export const Navigation = () => {
    return <nav>
        <div>
            <p>FJ</p>
        </div>
        <div className={styles.nav__ham}>
            <input type="checkbox" className={styles.nav__checkbox} id="checkbox_toggle"/>
            <label htmlFor="checkbox_toggle" className={styles.nav__hamburgerButton}>
                <ul>
                    <li className={styles.hamburgerButton__topStroke}></li>
                    <li className={styles.hamburgerButton__centerStroke}></li>
                    <li className={styles.hamburgerButton__bottomStroke}></li>
                </ul>
            </label>
            <div className={styles.nav__content}>
                <ul>
                    <li><a href="#">Photo Gallery</a></li>
                    <li><a href="#">Log In</a></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navigation