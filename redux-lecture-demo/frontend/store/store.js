// importing a "named" export
import { createStore, applyMiddleware } from 'redux';

// import a logger so we can see prev state, action, next state
import logger from 'redux-logger';

// import our root reducer!
import rootReducer from '../reducers/root_reducer';

// we export a "configureStore" function
const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,  // always root reducer as 1st arg
    preloadedState,  // optional initial state
    applyMiddleware(logger)  // optional middleware (more on that tomorrow)
  );
};

export default configureStore;