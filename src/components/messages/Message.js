import React from 'react';

export default class Message extends React.Component {
  constructor (props) {
    super(props);
    this.timeout = null;
  }

  componentDidMount () {
    this.timeout = setTimeout(this.close.bind(this), 3000);
  }

  componentWillUnmount () {
    clearTimeout(this.timeout);
  }

  close () {
    clearTimeout(this.timeout);
    this.props.closeMessage()
  }

  render () {
    return(
      <div className={`message-item ${this.props.message.type}`}>
        <p>{this.props.message.text}</p>

        <button onClick={this.close.bind(this)}>&times;</button>
      </div>
    );
  }
}
