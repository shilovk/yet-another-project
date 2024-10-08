import React from "react";
import styles from "./draggable-animal.module.css";
import { useDrag } from "react-dnd";

const DraggableAnimal = ({ data }) => {
  const { id, content } = data;

  const [{ isDragging }, drag] = useDrag({
    type: "animal",
    item: { id }, // Передаём объект с id
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} className={styles.animalElement} style={{ opacity }}>
      {content}
    </div>
  );
};

export default DraggableAnimal;
