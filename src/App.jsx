import React from "react";
import styles from "./App.module.css";
import { Navigation } from "./Components/Navigation/Navigation"
import { Homepageinfo } from "./Components/Homepageinfo/Homepageinfo"

function App() {
  return <div className={styles.App}>
      <Navigation />
      <Homepageinfo />
    </div>;
}

export default App
