import React from 'react';
import Chat from './chat/chat';

class ChatWithTools extends React.Component {

  state = {
    shouldShowTools: false
  }

  handleMouseEnter = () => {
    this.setState({shouldShowTools: true});
  }

  handleMouseLeave = () => {
    this.setState({shouldShowTools: false});
  }

  render() {
    return (
      <div
        className="chat-with-tools"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Chat {...this.props} />
        {this.state.shouldShowTools && (
          <div className="tools">
            <button>Не беспокоить</button>
            <button>Удалить</button>
          </div>
        )}
      </div>
    );
  }
};

export default ChatWithTools;
