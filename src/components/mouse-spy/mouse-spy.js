import React, { useEffect, useState } from "react";

const MouseSpy = () => {
  const [mousePosition, setMousePosition] = useState([]);

  useEffect(()=>{
    // Устанавливаем слушатель события при монтировании
    document.addEventListener("mousemove", trackMousePos);

    // Сбрасываем слушатель события при удалении компонента из DOM
    return () => {
      document.removeEventListener("mousemove", trackMousePos);
    }
  }, [])

  const trackMousePos = (e) => {
    setMousePosition([e.clientX, e.clientY])
  }

  return (
    <div>{mousePosition}</div>
  )
}
// class MouseSpy extends React.Component {
//   state = {
//     mousePosition: []
//   };
//
//   // Устанавливаем слушатель события при монтировании
//   componentDidMount() {
//     document.addEventListener("mousemove", this.trackMousePos);
//   }
//
//   // Сбрасываем слушатель события при удалении компонента из DOM
//   componentWillUnmount() {
//     document.removeEventListener("mousemove", this.trackMousePos);
//   }
//
//   trackMousePos = (e) => {
//     this.setState({
//       mousePosition: [e.clientX, e.clientY]
//     });
//   };
//
//   render(){
//     return (
//       <div></div>
//     )
//   }
// }

export default MouseSpy;
