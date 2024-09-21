// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Navigation } from "./Components/Navigation/Navigation";
import { Landing } from "./Components/Landing/Landing";
import { Homepageinfo } from "./Components/Homepageinfo/Homepageinfo";
import Photogallery from "./Components/Photogallery/Photogallery"; // No curly braces

function HomePage() {
  return (
    <>
      <Landing />
      <Homepageinfo />
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
          <Route path="/photo-gallery" element={<Photogallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
