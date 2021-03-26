import React, { Component } from "react";

class Documents extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h2>{this.props.info.content}</h2>
      </div>
    );
  }
}
export default Documents;
