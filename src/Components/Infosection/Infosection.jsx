import React from "react";
import styles from "./Infosection.module.css";

export const Infosection = () => {
    return <div className={styles.landing}>
        <div className={styles.landing__header}>
            <div className={styles.header__text}>
                <h1>Our Gallery </h1>
                <h3>All our memorys in <em> one </em>  place</h3>
            </div>
            <div className={styles.header__image}>
                <img src="./allPhotos.gif"></img>
            </div>
        </div>
        <div className={styles.landing__information}>
            <div className={styles.information__images}>
                <img src="./slideshow4.png" alt="Slide 1" />
                <img src="./slideshow15.png" alt="Slide 2" />
                <img src="./slideshow14.png" alt="Slide 3" />
                <img src="./slideshow6.png" alt="Slide 5" />
                <img src="./slideshow11.png" alt="Slide 7" />
                <img src="./slideshow12.png" alt="Slide 8" />
                <img src="./slideshow8.png" alt="Slide 9" />
                <img src="./slideshow3.png" alt="Slide 10" />
                <img src="./slideshow2.png" alt="Slide 6" />
                <img src="./slideshow7.png" alt="Slide 11" />
                <img src="./slideshow5.png" alt="Slide 12" />
                <img src="./slideshow10.png" alt="Slide 13" />
                <img src="./slideshow13.png" alt="Slide 14" />
            </div>
        </div>
    </div>
}

export default Infosection