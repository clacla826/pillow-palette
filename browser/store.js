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





// import { createStore, applyMiddleware } from 'redux';
// import loggerMiddleware from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from './redux';

// export default createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
// );
