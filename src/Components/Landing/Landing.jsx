import React from "react";
import styles from "./Landing.module.css";

export const Landing = () => {
    return <div className={styles.landing}>
        <div className={styles.landing__header}>
           <h1>Fiona</h1>
           <h3>+Jun</h3>
        </div>
        <div className={styles.landing__information}>
            <a href="#">View Gallery</a>
            <img src="public/loading.gif"></img>
        </div>
    </div>
}

export default Landing