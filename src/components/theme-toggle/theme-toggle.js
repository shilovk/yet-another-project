import React from 'react';

// Функциональный компонент
function ThemeToggle() {

  // Начальное состояние компонента и функция для изменения состояния
  const [theme, setTheme] = React.useState("светлая");

  // Обработчик клика на кнопку
  const toggleTheme = () => {
    // Вызов функции для изменения состояния
    setTheme(theme === "светлая" ? "тёмная" : "светлая");
  };

  return (
    <div className={theme === "светлая" ? "th-light" : "th-dark"}>
      <p>Включена {theme} тема</p>
      <button onClick={toggleTheme}>
        {theme === "светлая" ? "🌚" : "🌞"}
      </button>
    </div>
  );
}

// Классовый компонент
// class ThemeToggle extends React.Component {
//   // Начальное состояние компонента
//   state = { theme: "светлая" };
//
//   // Обработчик клика на кнопку
//   toggleTheme = () => {
//     // Вызов метода для изменения состояния
//     this.setState({
//       theme: this.state.theme === "светлая" ? "тёмная" : "светлая",
//     });
//   };
//
//   render() {
//     return (
//       <div className={this.state.theme === "светлая" ? "th-light" : "th-dark"}>
//         <p>Включена {this.state.theme} тема</p>
//         <button onClick={this.toggleTheme}>
//           {this.state.theme === "светлая" ? "🌚" : "🌞"}
//         </button>
//       </div>
//     );
//   }
// }

export default ThemeToggle;
