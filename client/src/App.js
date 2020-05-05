import React, { useState, useContext } from "react";
import "./App.css";
import Posts from "./pages/Posts";
import UserContext from "./utils/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreatePost from "./pages/CreatePost";
<<<<<<< HEAD
import ProfilePage from "./pages/ProfilePage";
=======
//  import ProfilePage from "./pages/ProfilePage";



>>>>>>> 295d83feab0b813d09e829dfee4a46bf06c71ee3

function App () {

    const [currUser, setCurrUser] = useState({
      name: "Garrett",
      email: "Gsreichman@gmail.com",
      phone: "867-53-09",
      ID: 1337,
      pic: "https://www.gstatic.com/tv/thumb/persons/258/258_v9_bb.jpg",
      bio: "this is a test bio"
    });
    return (

      <Router>
        <div className="App">
<<<<<<< HEAD
          <Nav></Nav>
          <Switch>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/" component={Posts} />
          </Switch>
=======
          <UserContext.Provider value={{currUser, setCurrUser}}>
            <Nav></Nav>
            <Switch>
              {/* <Route path="/profile" component={ProfilePage} /> */}
              <Route path="/createpost" component={CreatePost} />
              <Route path="/" component={Posts} />
            </Switch>
          </UserContext.Provider>
>>>>>>> 295d83feab0b813d09e829dfee4a46bf06c71ee3
        </div>
      </Router>
    );
}

export default App;
