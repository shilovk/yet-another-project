import React from 'react';
import styles from './drop-target.module.css';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_TYPE } from "../../../services/actions/draggable-animal";

const DropTarget = ({ board }) => {
  const dispatch = useDispatch();
  const animals = useSelector(state => state.animalList.animals);

  const [{ isHover }, drop] = useDrop({
    accept: "animal",
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      // Отправим экшен с текущим перетаскиваемым элементом и названием доски
      dispatch({
        type: UPDATE_TYPE,
        id: item.id, // Здесь передаём объект `item`, который содержит id
        board
      });
    },
  });

  const borderColor = isHover ? "lightgreen" : "transparent";

  return (
    <div ref={drop} className={styles.board} style={{ borderColor }}>
      {animals
        .filter(animal => animal.board === board)
        .map(animal => (
          <div key={animal.id} className={styles.animal}>
            {animal.content}
          </div>
        ))}
    </div>
  );
};

export default DropTarget;
