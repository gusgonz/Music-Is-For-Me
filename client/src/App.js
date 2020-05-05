import React, { useState, useContext } from "react";
import "./App.css";
import Posts from "./pages/Posts";
import UserContext from "./utils/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreatePost from "./pages/CreatePost";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [currUser, setCurrUser] = useState({
    name: "Garrett",
    email: "Gsreichman@gmail.com",
    phone: "867-53-09",
    ID: 1337,
    pic: "https://www.gstatic.com/tv/thumb/persons/258/258_v9_bb.jpg",
    bio: "this is a test bio",
  });
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
