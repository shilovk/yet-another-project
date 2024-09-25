import React from 'react';
import { memo } from "react";

const Chat = memo((props) => {
  return (
    <div className="chat">
      <img src={`img/${props.id}.png`} width="75" alt="chat-avatar" />
      <h2>{Math.random()}</h2>
      <div className="date">{props.lastMessageAt}</div>
    </div>
  );
});

// class Chat extends React.PureComponent {
//   render() {
//     return (
//       <div className="chat">
//         <img src={`img/${this.props.id}.png`} width="75" />
//         <h2>{Math.random()}</h2>
//         <div className="date">{this.props.lastMessageAt}</div>
//       </div>
//     );
//   };
// }

export default Chat;
