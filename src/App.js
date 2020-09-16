import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import SidePanel from "./components/layout/SidePanel";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.sideRef = React.createRef();
  }
  state = {
    sidePanelOpen: false,
    categories: ["home", "work"],
    todoList: [
      {
        id: uuid(),
        title: "take out the trash",
        done: false,
        //norway uses the time format i like :)
        added: new Date().toLocaleString("no"),
        completed: "-",
        category: "home",
        description: "do not trip",
      },
      {
        id: uuid(),
        title: "make portfolio",
        done: false,
        added: new Date().toLocaleString("no"),
        completed: "-",
        category: "work",
        description: "make it a good one, maybe use glitter?",
      },
    ],
  };

  deleteTodo = (id) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      console.log("deleted");
      this.setState({
        todoList: [...this.state.todoList.filter((todo) => todo.id !== id)],
      });
    } else {
      console.log("continue");
    }
  };

  //toggle todos.complete
  markComplete = (id) => {
    this.setState({
      // map through the state.todoList
      todos: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          //set todo.complete to whatever it is not at the moment(toggle)
          if (todo.completed === "-") {
            todo.completed = new Date().toLocaleString("no");
          } else {
            todo.completed = "-";
          }
          todo.done = !todo.done;
        }
        //return the todo
        return todo;
      }),
    });
  };

  addTodo = (title, category, description) => {
    const newTodo = {
      id: uuid(),
      title: title,
      done: false,
      added: new Date().toLocaleString("no"),
      completed: "-",
      category: category,
      description: description,
    };

    if (this.state.categories.includes(category)) {
      this.setState({
        todoList: [...this.state.todoList, newTodo],
      });
    } else {
      this.setState({
        todoList: [...this.state.todoList, newTodo],
        categories: [...this.state.categories, category],
      });
    }
  };
  toggleSidePanel = () => {
    this.setState((prevState) => ({
      sidePanelOpen: !prevState.sidePanelOpen,
    }));
  };

  render() {
    const Table = () => {
      return (
        <table id="todoTable">
          <thead>
            <tr className="tableRow" id="headerRow">
              <th className="tableItem" id="doneCol">
                Done
              </th>
              <th className="tableItem" id="todoCol">
                Todo
              </th>
              <th className="tableItem" id="addedCol">
                Added
              </th>
              <th className="tableItem" id="completedCol">
                Completed
              </th>
              <th className="tableItem" id="actionCol">
                Actions
              </th>
            </tr>
          </thead>
        </table>
      );
    };
    return (
      <div className="App">
        <div className="container">
          <SidePanel
            ref={this.sideRef}
            categories={this.state.categories}
            width={this.state.sidePanelOpen ? "350px" : "0px"}
            toggleSidePanel={this.toggleSidePanel}
            todos={this.state.todoList}
          />
          <div id="mainPage">
            <button id="sidePanelOpen" onClick={this.toggleSidePanel}>
              Categories
            </button>
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Table />
            <Todos
              todos={this.state.todoList}
              markComplete={this.markComplete}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
