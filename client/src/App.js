import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreatePost from "./pages/CreatePost";
// import ProfilePage from "./pages/ProfilePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav></Nav>
          <Switch>
            {/* <Route path="/profile" component={ProfilePage} /> */}
            <Route path="/createpost" component={CreatePost} />
            <Route path="/" component={Posts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
