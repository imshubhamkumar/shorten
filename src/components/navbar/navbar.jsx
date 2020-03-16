import React, { Component } from "react";
import './navbar.css'

class navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light shadow-sm">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </nav>
      </div>
    );
  }
}

export default navbar;
