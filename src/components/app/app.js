import React from "react";
import styles from "./app.module.css";
import Header from "../header/header";
import VideoPlayer from "../video-player/video-player";
import AutoPlay from "../video-player/auto-play/auto-play";
import Modal from "../modal/modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ visible: true });
  }

  handleCloseModal() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <>
        <VideoPlayer />
        <AutoPlay />
        <div className={styles.app}>
          <button onClick={this.handleOpenModal}>Открыть модальное окно</button>
          {this.state.visible && (
            <Modal header="Внимание!" onClose={this.handleCloseModal}>
              <p>Спасибо за внимание!</p>
              <p>Открывай меня, если станет скучно :)</p>
            </Modal>
          )}
        </div>
        <Header />
      </>
    );
  }
}

export default App;
