// import our action constants to avoid typos
import { RECEIVE_TEA } from '../actions/tea_actions';

// reducers are function that take in state and an action
// NOTE: state will be undefined UNLESS we use a default argument
//   ^ this will throw an error during initialization
const teasReducer = (state = {}, action) => {
  // Freeze state to prevent mutations
  Object.freeze(state);

  // setup a "nextState" object
  // assign is shallow copy; merge is deep copy
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TEA:
      // we want our state to look like:
      /*
        10: {
          id: 10,
          // ...other tea properties
        }
        aka 10: teaObject
      */
     // setting a key in next state
     // key is the tea's id (assuming tea looks like: {id: 10, name: 'oolong'})
      nextState[action.tea.id] = action.tea;
      return nextState; // return our new, updated state
    default:
      return state; // Important! returns old state
  }
};

// un-named, aka default, export
export default teasReducer;

const sometodos = [
  {id:2,
  title:'butts'},
  {id:3,
  title:'farts'}
]