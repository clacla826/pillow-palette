import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group'

export default function AppearCheckMarkApp () {

  return (
    <div >
    <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <h1>Fading at Initial Mount</h1>
  </CSSTransitionGroup>
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
