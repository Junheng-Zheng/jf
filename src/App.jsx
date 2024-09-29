// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Navigation } from "./Components/Navigation/Navigation";
import { Landing } from "./Components/Landing/Landing";
import { Homepageinfo } from "./Components/Homepageinfo/Homepageinfo";
import { Infosection } from "./Components/Infosection/Infosection";

function HomePage() {
  return (
    <>
      <Landing />
      <Homepageinfo />
      <Infosection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navigation />
        <Routes>
          <Route path="jf/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
