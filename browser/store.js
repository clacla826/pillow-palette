import { createStore, applyMiddleware } from 'redux';
import yourReducer from './redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  yourReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;


// import { combineReducers } from 'redux';
// import users from './users';
// import stories from './stories';
// import currentUser from './auth';

// export default combineReducers({ users, stories, currentUser });
