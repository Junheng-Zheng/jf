import React from "react";
import styles from "./App.module.css";
import { Navigation } from "./Components/Navigation/Navigation"

function App() {
  return <div className={styles.App}>
      <p>Hello</p> 
      <Navigation />
    </div>;
}

export default App
