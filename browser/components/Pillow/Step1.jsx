import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import _ from 'lodash';

//CHECKMARK STYLING(not working in css file)//
const clicked = {
  width: "100px",
  height: "100px"
};

export default class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      pillowSize: "",
      checkMarkImg: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderCheckMark = this.renderCheckMark.bind(this);
  }

  handleClick(evt) {
    let choice = String(evt.target.src).split('/')[String(evt.target.src).split('/').length-1].split('.')[0].split('_')
    choice = choice[choice.length-1]
    this.setState({ isClicked: true, pillowSize: choice, checkMarkImg: ["images/check-mark.png"] });
  }

  renderCheckMark() {
    return this.state.checkMarkImg.map((img, index) => {
      return (
        <li key={img}>
          <img style={clicked} src={img} />
        </li>
      );
    });
  }


  render() {
    console.log("REDERING", this.state);

    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 100
    };

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

              <div id="parentImg">
                {/*<NavLink to="/step2" data-size="20x20">*/}
                <img
                  onClick={this.handleClick}
                  className="pillowImages1"
                  src="images/pillow_insert_20x20.png"
                />
                <ul id="childCheckMark">
                  <ReactCSSTransitionGroup {...transitionOptions}>
                    {(this.state.pillowSize === '20x20') && this.renderCheckMark()}
                  </ReactCSSTransitionGroup>
                </ul>
                {/* </NavLink> */}
              </div>
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
              <div id="parentImg">
                {/*<NavLink to="/step2" data-size="16x16">*/}
                <img
                  onClick={this.handleClick}
                  className="pillowImages3"
                  src="images/pillow_insert_16x16.png"
                />
                <ul id="childCheckMark">
                  <ReactCSSTransitionGroup {...transitionOptions}>
                  {(this.state.pillowSize === '16x16') && this.renderCheckMark()}
                  </ReactCSSTransitionGroup>
                </ul>
                {/* </NavLink> */}
              </div>
            </section>


          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Faker from 'faker';
// import _ from 'lodash';

// const clicked = {
//   width: "100px",
//   height: "100px"
// };

// export default class PracticeAnimations extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = { quotes: [] };
// 	}

// 	onAddClick() {
// 		const quote = Faker.lorem.sentence();
// 		this.setState({ quotes: [...this.state.quotes, quote] });
// 	}

// 	onRemoveClick(quote) {
// 		this.setState({ quotes: _.without(this.state.quotes, quote)});
// 	}

// 	renderQuotes() {
// 		return this.state.quotes.map((item, index) => {
// 			return (
// 				<li>
//           <img
//           key="check"
//           style = {clicked}
//           className="checkcheck"
//           src="images/check-mark.png"
//         />
// 				</li>
// 			)
// 		});
// 	}

// 	render() {

// 		//The transiton name will also be used for the css class definiton
// 		const transitionOptions = {
// 			transitionName: 'fade',
// 			transitionEnterTimeout: 500,
// 			transitionLeaveTimeout: 100
// 		};

// 		return (
// 			<div>

// 			  <div id="practice" className="checkdiv">
// 			  	<button onClick={this.onAddClick.bind(this)} className="button success">Add</button>
// 				  	<ul>
// 				  	  <ReactCSSTransitionGroup {...transitionOptions}>
// 				  	    {this.renderQuotes()}
// 				  	  </ReactCSSTransitionGroup>
// 				  	</ul>
// 			  </div>

// 			</div>
// 		);
// 	}

// }
