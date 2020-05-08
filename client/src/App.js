import React, { useState, useContext } from "react";
import "./App.css";
import Posts from "./pages/Posts";
import UserContext from "./utils/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreatePost from "./pages/CreatePost";
import ProfilePage from "./pages/ProfilePage";
import Login from './pages/LoginPage';

function App() {
  const [currUser, setCurrUser] = useState({});
  return (
    
    <Router>
      <div className="App">
      <UserContext.Provider value={{currUser, setCurrUser}}>
        <Nav></Nav>
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Login}/>
        </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
