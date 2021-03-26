import React, { Component } from "react";

class Tasks extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h2>{this.props.info.content}</h2>
      </div>
    );
  }
}
export default Tasks;
