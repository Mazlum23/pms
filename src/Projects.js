import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Projects extends Component {
  state = {
    categories: [
      { category_id: 1, category_name: "mazlum" },
      { category_id: 2, category_name: "adile" },
    ],
  };
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h2>{this.props.info.content}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.category_id}>
              {category.category_name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default Projects;
