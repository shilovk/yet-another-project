import React from 'react';
import styles from './drop-target.module.css'
import { useDrop } from "react-dnd";

const DropTarget = ({children, onDropHandler}) => {
  const [{isHover}, dropTarget] = useDrop({
    accept: "animal",
    drop(itemId) {
      onDropHandler(itemId);
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const backgroundColor = isHover ? 'green' : '';

  return (
    <div
      ref={dropTarget}
      className={styles.target}
      style={{backgroundColor}}
    >
      {children}
    </div>
  );
};

export default DropTarget;
