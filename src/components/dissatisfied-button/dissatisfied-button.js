import React from 'react';

function DissatisfiedButton() {
  function handleCaptureClick() {
    console.log("Что-то мне подсказывает, что на кнопку сейчас надавят...");
  }
  // Добавим хендлер для события, зарегистрированного на фазе захвата.

  function handleClickBubble() {
    console.log("Поймаю событие после handleAgressiveButtonClick!");
  }

  function handleAgressiveButtonClick(e) {
    e.stopPropagation();
    e.preventDefault();
    // Останавливаем фазы всплытия и захвата на данном элементе;
    console.log(e.target);
    console.log(e.currentTarget);
    console.log("Не дави на меня!");
  }

  function handleAgressiveButtonMouseEnter() {
    console.log("Вы мне солнце заслонили!");
  }

  function handleAgressiveButtonMouseLeave() {
    console.log("Ну вот, теперь слишком жарко!");
  }

  return (
    <div onClick={handleClickBubble} onClickCapture={handleCaptureClick}>
      <button
        onClick={handleAgressiveButtonClick}
        onMouseEnter={handleAgressiveButtonMouseEnter}
        onMouseLeave={handleAgressiveButtonMouseLeave}
      >
        <span>
          Поиграй со мной!
        </span>
      </button>
    </div>
  );
}

// class DissatisfiedButton extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.handleAgressiveButtonClick = this.handleAgressiveButtonClick.bind(this)
//   }
//
//   handleAgressiveButtonClick(e) {
//     console.log(this);
//     console.log('Не дави на меня!');
//   }
//
//   handleAgressiveButtonMouseEnter = (e) => {
//     console.log(this);
//     console.log('Вы мне солнце заслонили!');
//   }
//
//   handleAgressiveButtonMouseLeave(e) {
//     console.log(this);
//     // Несмотря на использование метода класса,
//     // this будет равен текущему экземпляру компонента
//     console.log('Ну вот, теперь слишком жарко!');
//   }
//
//
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.handleAgressiveButtonClick}
//           onMouseEnter={this.handleAgressiveButtonMouseEnter}
//           onMouseLeave={e => this.handleAgressiveButtonMouseLeave(e)}
//         >
//           {/* В качестве значения onMouseLeave указываем стрелочную функцию */}
//           Поиграй со мной!
//         </button>
//       </div>
//     );
//   }
// }

export default DissatisfiedButton;
