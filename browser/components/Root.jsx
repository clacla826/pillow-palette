import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Navbar from "./Navbar";

export default class Root extends Component {
  // componentDidMount() {
  // 	this.props.fetchInitialData();
  // }
  render() {
    return (
      <BrowserRouter>
        <div id="main" className="container-fluid">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

//export default Root;
