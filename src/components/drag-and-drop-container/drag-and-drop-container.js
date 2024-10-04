import React, { useState, useEffect } from "react";
import styles from "./drag-and-drop-container.module.css";
import DraggableAnimal from "./draggable-animal/draggable-animal";
import DropTarget from "./drop-targer/drop-target";
import { listImages } from "../../services/list-images";

export const DragAndDropContainer = () => {
  const [elements, setElements] = useState([]);
  const [draggedElements, setDraggedElements] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);

  useEffect(() => {
    setElements([...listImages]); // При монтировании компонента добавляем в elements данные
  }, []);

  const handleDrag = (e, draggedElement) => {
    e.preventDefault();
    setDraggedElement(draggedElement);
  };

  const handleDragOver = (e) => e.preventDefault(); // Обработчик по наведению

  const handleDrop = () => {
    setDraggedElements([...draggedElements, draggedElement]);
    setElements(elements.filter((element) => element.id !== draggedElement.id));
    setDraggedElement(null);
  };

  return (
    <article className={styles.container}>
      <div className={styles.animals}>
        {elements.map((animal) => (
          <DraggableAnimal
            key={animal.id}
            data={animal}
            onDragHandler={handleDrag}
          />
        ))}
      </div>

      <DropTarget onDragOverHandler={handleDragOver} onDropHandler={handleDrop}>
        {draggedElements.map((item) => (
          <div key={item.id} className={styles.item}>
            <span className={styles.animalItem}>{item.content}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </DropTarget>
    </article>
  );
};
