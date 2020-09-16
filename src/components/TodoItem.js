import React, { Component } from "react";
import PropTypes from "prop-types";
import "./todoitem.css";

export class TodoItem extends Component {
  state = {
    extendDescription: false,
  };
  styleLineOver = () => {
    return {
      //"line-through" if this.props.todo.done = true
      textDecoration: this.props.todo.done ? "line-through" : "none",
    };
  };
  styleExtendDescription = () => {
    this.setState((prevState) => ({
      extendDescription: !prevState.extendDescription,
    }));
  };

  render() {
    //extract values by definign them in render before return
    const {
      id,
      title,
      added,
      completed,
      category,
      description,
    } = this.props.todo;
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
                <div style={this.styleLineOver()}>{title}</div>
                <div
                  id="descriptionField"
                  style={{
                    display: this.state.extendDescription ? "none" : "block",
                  }}
                >
                  <p>description: {description}</p>
                  <p>category: {category}</p>
                </div>
              </th>
              <th className="tableItem" id="addedCol">
                <div id="todoItemAdded">{added}</div>
              </th>
              <th className="tableItem" id="completedCol">
                {completed}
              </th>
              <th className="tableItem" id="actionCol">
                <button
                  id="xButton"
                  onClick={this.styleExtendDescription.bind(this)}
                >
                  {this.state.extendDescription ? "extend" : "collapse"}
                </button>
                <button
                  id="xButton"
                  onClick={this.props.deleteTodo.bind(this, id)}
                >
                  delete
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
