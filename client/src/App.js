import React, { useState, useContext } from "react";
import "./App.css";
import Posts from "./pages/Posts";
import UserContext from "./utils/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer'
import CreatePost from "./pages/CreatePost";
import ProfilePage from "./pages/ProfilePage";
import Login from './pages/LoginPage';

function App() {
  const [currUser, setCurrUser] = useState({});
  return (
    
    <Router>
      <div className="flex-wrapper App">
      <UserContext.Provider value={{currUser, setCurrUser}}>
        <Nav></Nav>
        <Switch>
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Login}/>
        </Switch>
        <br/><br/><br/><br/><br/><br/>
      <Footer></Footer>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
