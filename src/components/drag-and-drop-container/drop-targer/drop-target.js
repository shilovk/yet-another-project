import React from 'react';
import styles from './drop-target.module.css'

const DropTarget = (props) => {
  const { children, onDropHandler, onDragOverHandler } = props;
  return (
      <div
      className={styles.target}
      onDrop={onDropHandler}
      onDragOver={onDragOverHandler}
    >
      {children}
    </div>
  );
};

export default DropTarget;