import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TopNav extends Component {

  render() {
    return (
      <div className="mb-2">
        <nav className="navbar navbar-expand overflow-hidden navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">Prospect Theory</Link>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/explanation">Explanation</Link>
            <Link className="nav-item nav-link" to="/examples">Examples</Link>
            <Link className="nav-item nav-link" to="/calculator">Calculator</Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default TopNav;
