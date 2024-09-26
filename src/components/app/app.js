import React from "react";
import styles from "./app.module.css";
import Header from "../header/header";
import VideoPlayer from "../video-player/video-player";
import AutoPlay from "../video-player/auto-play/auto-play";
import Modal from "../modal/modal";
import DissatisfiedButton from "../dissatisfied-button/dissatisfied-button";
import ChatWithTools from "../chat-with-tools/chat-with-tools";
import ThemeToggle from "../theme-toggle/theme-toggle";
import Hi from "../hi/hi";
import MouseSpy from "../mouse-spy/mouse-spy";
import Game from "../game/game";
import AgreementForm from "../agreement-form/agreement-form";

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
    const chats = [
      { id: "id1", name: "name1", lastMessageAt: "lastMessageAt1" },
      { id: "id2", name: "name2", lastMessageAt: "lastMessageAt2" },
      { id: "id3", name: "name3", lastMessageAt: "lastMessageAt3" },
    ];
    return (
      <>
        <AgreementForm />
        <Game />
        <MouseSpy />
        <Hi name={'Рудольф'} />
        <ThemeToggle />
        <h2>Чаты</h2>
        {chats.map((chat) => (
          <ChatWithTools id={chat.id} name={chat.name} lastMessageAt={chat.lastMessageAt} />
        ))}
        <DissatisfiedButton />
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
