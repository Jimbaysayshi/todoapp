import React, { Component } from "react";
import "./addtodo.css";
export class AddTodo extends Component {
  state = {
    title: "",
    category: "",
    description: "",
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
    if (this.state.title.length >= 1) {
      this.props.addTodo(
        this.state.title,
        this.state.category,
        this.state.description
      );
      //set state to '' after ready
      this.setState({ title: "", category: "", description: "" });
    } else {
      alert("You have to give a name for your todo");
    }
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
          name="description"
          placeholder="Add Description ..."
          style={{ flex: "10", padding: "10px" }}
          value={this.state.description}
          onChange={this.onChange}
        />
        <input
          className="addInput"
          type="text"
          name="category"
          placeholder="Add Category ..."
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
