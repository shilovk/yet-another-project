import styles from './app.module.css';

import Header from "../header/header";
import React from "react";
import VideoPlayer from "../video-player/video-player";
import AutoPlay from "../video-player/auto-play/auto-play";

function App() {
  return (
    <div className={styles.app}>
      <VideoPlayer />
      <AutoPlay />
      <Header />
    </div>
  );
}

export default App;
