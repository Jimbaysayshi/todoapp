import React, { Component } from "react";
import "./sidepanel.css";
import { v4 as uuid } from "uuid";

export class SidePanel extends Component {
  state = { titles: [], categories: [] };
  componentDidMount() {
    this.showCategories();
  }
  componentDidUpdate() {
    this.showCategories();
  }
  showTitles = (category) => {
    var titles;
    if (category === "all") {
      //"all" is the default button, shows every todo
      titles = this.props.todos.filter((todo) => todo.title !== category);
    } else {
      //else only show todos in this category
      titles = this.props.todos.filter((todo) => todo.category === category);
    }
    this.showCategories();

    this.setState({
      titles: titles,
    });
  };

  showCategories = () => {
    //get all uniquely named category and set state accordingly
    var uniqueCategories = [
      ...new Set(this.props.todos.map((todos) => todos.category)),
    ];
    if (
      JSON.stringify(this.state.categories) !== JSON.stringify(uniqueCategories)
    ) {
      this.setState({
        categories: uniqueCategories,
      });
    }
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
