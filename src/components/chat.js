import React, {useEffect} from 'react';

const ChatAPI = {};

const Chat = ({chatId}) => {
  useEffect(() => {
    // Получаем историю сообщений
    ChatAPI.getHistory(chatId);

    // Подписываемся на получение новых сообщений
    ChatAPI.subscribe(chatId);

    return () => {
      // Отписываемся от получения новых сообщений,
      // если изменился chatId или при размонтировании
      ChatAPI.unsubscribe();
    }
  }, [chatId])

  return (
    <div></div>
  )
}

// class Chat extends React.Component {
//   componentDidMount() {
//     // Получаем историю сообщений
//     ChatAPI.getHistory(this.props.chatId);
//     // Подписываемся на получение новых сообщений
//     ChatAPI.subscribe(chatId);
//   }
//
//   componentDidUpdate(prevProps) {
//     if (prevProps.chatId !== this.props.chatId) {
//       // Отписываемся от получения новых сообщений,
//       // если изменился chatId или при размонтировании
//       ChatAPI.unsubscribe();
//       // Получаем историю сообщений
//       ChatAPI.getHistory(this.props.chatId);
//       // Подписываемся на получение новых сообщений
//       ChatAPI.subscribe(chatId);
//     }
//   }
//
//   componentWillUnmount() {
//     // Отписываемся от получения новых сообщений
//     // при размонтировании
//     ChatAPI.unsubscribe();
//   }
//
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

export default Chat;
