import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";


import AppearCheckMarkApp from './CheckMark';

class Step1 extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("CLICKED")
    this.setState( {isClicked: true} );
    console.log("Did it clicked", this.state.isClicked)
  }






  render() {
    const isClicked = this.state.isClicked;
    console.log("REDERING", this.state)

    let mark = null;
    if (isClicked) {
      mark = <AppearCheckMarkApp />
    }


    return (
      <div className="container-fluid3" id="step1">
        <div className="flexcontainer">
          <div className="pageTitle col-sm-12">
            <header className="titleHeader">PICK YOUR PILLOW SIZE</header>
            <p className="subtitle">3 different sizes, 3 different fun!</p>

            <section className="col-sm-4 pillowSize">
              <header>
                <p className="choices">STANDARD SQUARE 20X20</p>
              </header>

              {/*<NavLink to="/step2" data-size="20x20">*/}
                <img
                  onClick = {this.handleClick}
                  className="pillowImages1 parent"
                  src="images/pillow_insert_20x20.png"
                />{mark}
              {/* </NavLink> */}
            </section>

            <section className="col-sm-4 pillowSize">
              <header>
                <p className="choices">STANDARD RECTANGLE 16X20</p>
              </header>
              <NavLink to="/step2" data-size="16x24">
                <img
                  className="pillowImages2"
                  src="images/pillow_insert_16x24.png"
                />
              </NavLink>
              <div className="checkmarkk" id="checkmark1B">
                <p>Comming Soon</p>
              </div>
            </section>

            <section className="col-sm-4 pillowSize">
              <header>
                <p className="choices">MINI SQUARE 16X16</p>
              </header>
              <NavLink to="/step2" data-size="16x16">
                <img
                  className="pillowImages3"
                  src="images/pillow_insert_16x16.png"
                />
              </NavLink>
            </section>
          </div>
        </div>
      </div>



    )
  }
}

export default Step1;
