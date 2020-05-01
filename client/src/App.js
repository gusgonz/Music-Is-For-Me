import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./pages/Posts";
import CreatePost from './pages/CreatePost';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Posts></Posts> */}
        <CreatePost />
      </div>
    );
  }
}

export default App;
