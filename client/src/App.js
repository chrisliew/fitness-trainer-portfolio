import React, { Component } from "react";
import AppNavbar from "./Components/AppNavbar";
import Home from "./Components/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Home />
        <h1>Fitness Trainer Portfolio</h1>
      </div>
    );
  }
}

export default App;
