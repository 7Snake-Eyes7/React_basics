import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor"
    };
  }

  changeMessage() {
    this.setState({
      message: "thanks for the sub"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>sub</button>
      </div>
    );
  }
}

export default Message;
