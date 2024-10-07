import React, { useState, useEffect } from "react";
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
import ErrorBoundary from "../error-boundary/error-boundary";
import ComponentWithError from "../component-with-error/component-with-error";
import RandomMovie from "../random-movie/random-movie";
import UserPage from "../user-page/user-page";
import { LoginContext } from '../../services/login-context.js';
import Counter from "../counter/counter";
import { Registration } from "../flight/registration";
import { counterSlice } from "../../services/actions/counter_slice";
import { useDispatch } from "react-redux";
import { addTodo } from "../../services/actions/new_actions";
import { CounterReducer } from "../counter/counter_reducer";
import { DraggableAnimal } from "../draggable-animal/draggable-animal";
import { DragAndDropContainer } from "../drag-and-drop-container/drag-and-drop-container";
import { listImages } from "../../services/list-images";
import { DndProviderContainer } from "../dnd-provider-container/dnd-provider-container";

interface Chat {
  id: string;
  name: string;
  lastMessageAt: string;
}

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { incrementByValue } = counterSlice.actions; // Доступ к экшенам

  useEffect(() => {
    // Отправляем экшен при монтировании компонента
    dispatch(incrementByValue(1)); // Используем экшен из слайса
    dispatch(addTodo('Купить молоко')); // Передаём текст задачи
  }, [dispatch]);

  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({ name: "Андрей" });
  const loginState = useState({ login_name: "login" });

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const chats: Chat[] = [
    { id: "id1", name: "name1", lastMessageAt: "lastMessageAt1" },
    { id: "id2", name: "name2", lastMessageAt: "lastMessageAt2" },
    { id: "id3", name: "name3", lastMessageAt: "lastMessageAt3" },
  ];

  const [elements, setElements] = useState([]);

  React.useEffect(() => {
    setElements([
      ...listImages
    ])
  }, []);

  return (
    <LoginContext.Provider value={loginState}>
      <ErrorBoundary>
        <DndProviderContainer />
        <DragAndDropContainer/>
        <section className={styles.element}>
          {
            elements.map((element) => <DraggableAnimal key={element.id} content={element.content}/>)
          }
        </section>
        <DraggableAnimal/>
        <CounterReducer/>
        <Registration/>
        <Counter/>
        <UserPage user={user} updateUserInfo={setUser}/>
        <RandomMovie/>
        <ComponentWithError/>
        <AgreementForm/>
        <Game/>
        <MouseSpy/>
        <Hi name="Рудольф"/>
        <ThemeToggle/>
        <h2>Чаты</h2>
        {chats.map((chat) => (
          <ChatWithTools
            key={chat.id}
            id={chat.id}
            name={chat.name}
            lastMessageAt={chat.lastMessageAt}
          />
        ))}
        <DissatisfiedButton/>
        <VideoPlayer/>
        <AutoPlay/>
        <div className={styles.app}>
          <button onClick={handleOpenModal}>Открыть модальное окно</button>
          {visible && (
            <Modal header="Внимание!" onClose={handleCloseModal}>
              <p>Спасибо за внимание!</p>
              <p>Открывай меня, если станет скучно :)</p>
            </Modal>
          )}
        </div>
        <Header/>
      </ErrorBoundary>
    </LoginContext.Provider>
  );
};

export default App;
