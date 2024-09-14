import React, { useState, useRef } from 'react';
import styles from "./Homepageinfo.module.css";

export const Homepageinfo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null); // Reference to the audio element
    
    const togglePlayPause = () => {
        if (isPlaying) {
        audioRef.current.pause();
        } else {
        audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // const restartSong = () => {
    //     audioRef.current.currentTime = 0; // Restart the song by setting the current time to 0
    //     audioRef.current.play(); // Play the song from the start
    //     setIsPlaying(true); // Set the state to 'playing'
    //   };
      

    return <div className={styles.homepageinfo}>
        <div className={styles.homepageinfo__widgets}>
            <div className={styles.homepageinfo__songWidget}>
                <audio ref={audioRef} src="../../../public/Audio/stephansanchez.mp3" preload="auto" />
                <div>
                    <h3>High</h3>
                    <p>Stephan Sanchez</p>
                </div>
                <button onClick={togglePlayPause}>
                    {isPlaying ? '||' : '▶'}
                </button>
                {/* <button onClick={restartSong}>
                    {'restart'}
                </button> */}
            </div>
            <div className={styles.homepageinfo__monthsWidget}>
                <h3>6</h3>
                <p>Months</p>
            </div>
            <div className={styles.homepageinfo__postWidget}>
                <div className={styles.postWidget__frame}></div>
                <div className={styles.postWidget__information}>
                    <p>3/14/24</p>
                    <p>💛</p>
                </div>
            </div>
        </div>
    </div>
}

export default Homepageinfo