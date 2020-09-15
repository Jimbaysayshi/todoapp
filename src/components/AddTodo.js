import React, { Component } from "react";
import "./addtodo.css";
export class AddTodo extends Component {
  state = {
    title: "",
    category: "",
  };

  onChange = (e) => {
    this.setState({
      //returns the current value of the button that launched the event
      // [e.target.name] means the name of the button (title) that corresponds to state key (title)
      // [e.target.name] could also be "title" but with this u can set all the states that correspong to state key
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    //prevent default submit function and just launch Addtodo()
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.category);
    //set state to '' after ready
    this.setState({ title: "", category: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }} id="addForm">
        <input
          className="addInput"
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: "10", padding: "10px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          className="addInput"
          type="text"
          name="category"
          placeholder="Add category ..."
          style={{ flex: "10", padding: "10px" }}
          value={this.state.category}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
