import styles from './app.module.css';

import Header from "../header/header";
import React from "react";

function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
