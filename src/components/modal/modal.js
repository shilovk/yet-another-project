import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css"; // Импортируем CSS-модули

const modalRoot = document.getElementById("react-modals");

class Modal extends React.Component {
  componentDidMount() {
    // Обработчик закрытия модального окна по нажатию на Esc
    document.addEventListener("keydown", this.handleEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { children, header, onClose } = this.props;
    return ReactDOM.createPortal(
      <>
        <div className={styles["modal__overlay"]} onClick={onClose}></div>
        <div className={styles["modal"]}>
          <div className={styles["modal__header"]}>
            <h2>{header}</h2>
            <button className={styles["modal__close-btn"]} onClick={onClose}>✕</button>
          </div>
          <div className={styles["modal__content"]}>
            {children}
          </div>
        </div>
      </>,
      modalRoot
    );
  }
}

export default Modal;
