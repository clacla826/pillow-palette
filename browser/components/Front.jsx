import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";


class Front extends Component {
  render() {
    return (
      <div className= "container-fluid2">
      <div className= "container mainPage">
        <div className= "mainPage col-sm-12">
          <header className= "titleMainPage"><h1>Hi! <br />Are you ready to<br />design your pillow?</h1></header>
          <p className= "subtitleMainPage">Customized pillow, starting at $89</p>
          <NavLink to="/step1" className= "button">GET STARTED</NavLink>
        </div>
      </div>
    </div>
    )

  }
}

export default Front;
