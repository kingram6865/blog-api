import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <NavLink to="/" className="nav-app-name">Candy Blog</NavLink>
        <div className="nav-links-container">
          <NavLink to="/posts" className="nav-link">Posts</NavLink>
          <span>|</span>
          <NavLink to="/add-post" className="nav-link">Add Post</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;