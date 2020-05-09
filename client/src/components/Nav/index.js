import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  color: 'white',
  marginLeft: "10px",
  marginRight: "10px"
}
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/posts">
        <h1 className="navbar-brand">
          Music Is For Me
        </h1>
      </Link>
      <Link to="/posts">
        <h3 className="nav-item" style={navStyle}>Posts</h3>
      </Link>
      <Link to="createpost">
        <h3 className="nav-item" style={navStyle}>Create Post</h3>
      </Link>
      <h1>  </h1>
      <Link to="profile">
        <h3 className="nav-item" style={navStyle}>Profile</h3>
      </Link>
    </nav>
  );
}

export default Nav;