import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Navbar from "./Navbar";
import Front from "./Front";
import Step1 from "./Pillow/Step1";


export default class Root extends Component {
  // componentDidMount() {
  // 	this.props.fetchInitialData();
  // }
  render() {
    return (
      <BrowserRouter>
        <div id="main" className="container-fluid">
          <Navbar />

          <Route exact path="/" component={Front} />
          <Route exact path="/step1" component={Step1} />
        </div>

      </BrowserRouter>
    );
  }
}

//export default Root;
