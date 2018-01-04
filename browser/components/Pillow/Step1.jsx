import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Faker from 'faker';
import _ from 'lodash';

const clicked = {
  width: "100px",
  height: "100px"
};

export default class PracticeAnimations extends Component {

	constructor(props) {
		super(props);
		this.state = { quotes: [] };
	}

	onAddClick() {
		const quote = Faker.lorem.sentence();
		this.setState({ quotes: [...this.state.quotes, quote] });
	}

	onRemoveClick(quote) {
		this.setState({ quotes: _.without(this.state.quotes, quote)});
	}

	renderQuotes() {
		return this.state.quotes.map((item, index) => {
			return (
				<li>
          <img
          key="check"
          style = {clicked}
          className="checkcheck"
          src="images/check-mark.png"
        />
				</li>
			)
		});
	}

	render() {

		//The transiton name will also be used for the css class definiton
		const transitionOptions = {
			transitionName: 'fade',
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 100
		};

		return (
			<div>

			  <div id="practice" className="checkdiv">
			  	<button onClick={this.onAddClick.bind(this)} className="button success">Add</button>
				  	<ul>
				  	  <ReactCSSTransitionGroup {...transitionOptions}>
				  	    {this.renderQuotes()}
				  	  </ReactCSSTransitionGroup>
				  	</ul>
			  </div>

			</div>
		);
	}

}



