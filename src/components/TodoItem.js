import React, { Component } from "react";
import PropTypes from "prop-types";
import "./todoitem.css";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      //"line-through" if this.props.todo.done = true
      textDecoration: this.props.todo.done ? "line-through" : "none",
    };
  };

  render() {
    //extract values by definign them in render before return
    const { id, title, added, completed } = this.props.todo;
    return (
      <div id="todoItemContainer">
        <table id="todoTable">
          <tbody>
            <tr className="tableRow">
              <th className="tableItem" id="doneCol">
                <input
                  id="todoCheckBox"
                  type="checkbox"
                  //send todo.id to Todos.js -> App.js by binding it to to the button event
                  onChange={this.props.markComplete.bind(this, id)}
                ></input>
              </th>
              <th className="tableItem" id="todoCol">
                <div style={this.getStyle()}>{title}</div>
              </th>
              <th className="tableItem" id="addedCol">
                <div id="todoItemAdded">{added}</div>
              </th>
              <th className="tableItem" id="completedCol">
                {completed}
              </th>
              <th className="tableItem" id="delCol">
                <button
                  id="xButton"
                  onClick={this.props.deleteTodo.bind(this, id)}
                >
                  X
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
/*
add styling to your elements with variables
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  
  borderRadius: "50%",
  float: "right",
  cursor: "pointer",
};
*/

export default TodoItem;
