import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid1">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="brandLogo" to="/">
              <img className="brandLogo" src="images/pillow_palette_logo.png" />
            </NavLink>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/">START</NavLink>
              </li>
              <li>
                <NavLink to="/">SIGN UP</NavLink>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
    );
  }
}

export default Navbar;
