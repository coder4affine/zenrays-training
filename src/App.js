import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./containers/Todo";
import LocaleContext from "./context/localeContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo Application</h1>
        <LocaleContext>
          <Todo />
        </LocaleContext>
      </div>
    );
  }
}

export default App;
