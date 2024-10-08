import React from "react";
import styles from "./draggable-animal.module.css";
import { useDrag } from "react-dnd";

const DraggableAnimal = ({data}) => {
  const {id, content} = data;
  const [{isDrag}, dragRef] = useDrag({
    type: "animal",
    item: {id},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  return (
    !isDrag &&
    <div
      ref={dragRef}
      className={styles.animalElement}
    >
      {content}
    </div>
  )
    ;
};

export default DraggableAnimal
