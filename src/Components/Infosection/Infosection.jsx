import React from "react";
import styles from "./Infosection.module.css";

export const Infosection = () => {
    return <div className={styles.landing}>
        <div className={styles.landing__header}>
            <div className={styles.header__text}>
                <h1>Our Gallery </h1>
                <h3>All of memorys in <em> one </em>  place</h3>
            </div>
            <div className={styles.header__image}>
                <img src="./allPhotos.gif"></img>
            </div>
        </div>
        <div className={styles.landing__information}>
        </div>
    </div>
}

export default Infosection