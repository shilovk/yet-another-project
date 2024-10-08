import React from "react";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropTarget from "./drop-targer/drop-target"; // Исправил название импорта
import styles from "./dnd-provider-redux-container.module.css";

export const DndProviderReduxContainer = () => {
  const boards = useSelector(state => state.boardList.boards);

  return (
    <section className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <article className={styles.element}>
          {boards.map((board, i) => (
            <DropTarget key={i} board={board} />
          ))}
        </article>
      </DndProvider>
    </section>
  );
};