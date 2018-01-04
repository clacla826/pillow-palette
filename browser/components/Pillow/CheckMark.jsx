import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function AppearCheckMarkApp () {

  return (
    <div >
    <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}>
    <img
          key="check"
          className="checkcheck"
          src="images/check-mark.png"
        />
  </ReactCSSTransitionGroup>
    </div>
  )
}

// import React from 'react';
// import {CSSTransitionGroup} from 'react-transition-group'


// export default class Example extends React.Component {
//     render() {
//         return (
//             <CSSTransitionGroup
//                in
//                className="fade"
//                appear={true}
//                timeout={500}>
//                 <div>
//                     <h1>Step One</h1>
//                 </div>
//             </CSSTransitionGroup>
//         );
//     }
// }
