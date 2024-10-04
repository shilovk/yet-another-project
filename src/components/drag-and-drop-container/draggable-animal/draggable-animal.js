import React from 'react';
import styles from "./draggable-animal.module.css";

const DraggableAnimal = (props) => {
  const { data, onDragHandler } = props;
  return (
    <div
      className={styles.animalElement}
      draggable
      onDrag={(e) => onDragHandler(e, data)}
    >
      {data.content}
    </div>
  );
};

export default DraggableAnimal;
