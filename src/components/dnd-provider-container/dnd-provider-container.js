import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableAnimal from "./draggable-animal/draggable-animal";
import DropTarget from "./drop-targer/drop-target";
import styles from "./dnd-provider-container.module.css";
import { listImages } from "../../services/list-images"; // импортируем данные

export const DndProviderContainer = () => {
  const [elements, setElements] = useState([]);
  const [draggedElements, setDraggedElements] = useState([]);

  // Загружаем данные из listImages при монтировании компонента
  useEffect(() => {
    setElements(listImages);
  }, []);

  const handleDrop = (itemId) => {
    setElements([
      ...elements.filter(element => element.id !== itemId.id)
    ]);

    setDraggedElements([
      ...draggedElements,
      ...elements.filter(element => element.id === itemId.id)
    ]);
  };

  return (
    <section className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <article className={styles.element}>
          <div className={styles.animals}>
            {
              elements.map(animal => (
                <DraggableAnimal key={animal.id} data={animal} />
              ))
            }
          </div>
          <DropTarget onDropHandler={handleDrop}>
            {
              draggedElements.map(item => (
                <div key={item.id} className={styles.item}>
                  <span className={styles.animalItem}>
                    {item.content}
                  </span>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </DropTarget>
        </article>
      </DndProvider>
    </section>
  );
}