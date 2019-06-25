import { combineReducers } from 'redux';
import teasReducer from './teas_reducer';

// combineReducers takes an object as an arg
const rootReducer = combineReducers({
  // slice of state name: reducer responsible for slice of state
  teas: teasReducer // we don't invoke the reducer
});

export default rootReducer;