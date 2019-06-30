import React from 'react';
import Message from './Message'

export default class Messages extends React.Component {
  render () {
    return(
      <div className="messages">
        {this.props.messages.map((message, i) => {
          return <Message key={message.id} message={message} closeMessage={() => this.props.closeMessage(message.id)} />
        })}
      </div>
    );
  }
}
