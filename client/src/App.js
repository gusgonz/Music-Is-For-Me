import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./pages/Posts";
import Container from "react-bootstrap/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container></Container>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Posts></Posts>
      </div>
    );
  }
}

export default App;
