import React, { Component } from "react";

import "./todos.css";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
