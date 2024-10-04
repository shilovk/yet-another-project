import React, {useState, useRef, useEffect} from 'react';
import styles from "./draggable-animal.module.css";

export const DraggableAnimal = (props) => {
  const [isElementDragging, setElementDrag] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({});
  const [elementPosition, setElementPosition] = useState({});
  const elementRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.transform = `translate(${elementPosition.x}px, ${elementPosition.y}px)`
    }
  }, [elementPosition]);

  const handleMouseDown = (e) => {
    setElementDrag(true);

    setCursorPosition({
      ...cursorPosition,
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top
    });
  };

  const handleMouseMove = (e) => {
    if (!isElementDragging) return;
    e.stopPropagation();
    e.preventDefault();

    setElementPosition({
      ...elementPosition,
      x: e.clientX - cursorPosition.x,
      y: e.clientY - cursorPosition.y
    });
  };

  const handleMouseUp = () => {
    setElementDrag(false);
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={styles.animalElement}
    >
      {props.content}
    </div>
  )
};