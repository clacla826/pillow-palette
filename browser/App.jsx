import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
//import Root from '../components/Root';  //get Root.jsx who has all the routes
import Root from './components/Root'

ReactDOM.render(
  <Provider store={store}>

    <Root />
  </Provider>,
  document.getElementById('app')
);


{/* <Provider store={store}>
<Root />
</Provider>, */}
