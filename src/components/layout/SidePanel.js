import React, { Component } from "react";
import "./sidepanel.css";
import { v4 as uuid } from "uuid";

export class SidePanel extends Component {
  state = { titles: [], categories: [] };
  componentDidMount() {
    console.log(this.props.todos);
    this.showCategories();
  }

  showTitles = (c) => {
    var titles;
    if (c === "all") {
      //FIX THIS TO MAP :)
      titles = this.props.todos.filter((todo) => todo.title !== c);
    } else {
      titles = this.props.todos.filter((todo) => todo.category === c);
    }
    this.showCategories();
    this.setState({
      titles: titles,
    });
  };
  showCategories = () => {
    var uniqueCategories = [
      ...new Set(this.props.todos.map((todos) => todos.category)),
    ];
    this.setState({
      categories: uniqueCategories,
    });
    return uniqueCategories;
  };
  render() {
    const categories = this.state.categories.map((category) => (
      <li className="categories" key={uuid()}>
        <button
          className="categoryBtn"
          onClick={() => this.showTitles(category)}
        >
          {category}
        </button>
      </li>
    ));

    const titles = this.state.titles.map((title) => (
      <li className="titleList" key={title.title}>
        {title.title}
      </li>
    ));

    return (
      <aside id="sidePanel" style={{ width: this.props.width }}>
        <div>
          <h3 id="sideTitle">Categories</h3>
          <button id="sideBtn" onClick={this.props.toggleSidePanel.bind(this)}>
            X
          </button>
        </div>
        <div id="sideLists">
          <ul id="categoryList">
            <li className="categories" key="all">
              <button
                className="categoryBtn"
                onClick={() => this.showTitles("all")}
              >
                all
              </button>
            </li>
            {categories}
          </ul>
          <ul id="titleList">{titles}</ul>
        </div>
      </aside>
    );
  }
}

export default SidePanel;
