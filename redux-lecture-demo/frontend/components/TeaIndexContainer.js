import TeaIndex from './TeaIndex'; // our presentational component

import { connect } from 'react-redux';

// function that takes in redux state as arg
//   returns an object (POJO)
//   maps part of our redux store to our presentational compoent AS props
const mapStateToProps = state => ({
  // name of prop: value from the redux store (state)
  teas: Object.values(state.teas)
});

/*
  teas: {
    1: {
      ...
    }
  }
*/

// connect is a Higher Order function, and takes in
//  mapStateToProps as 1st arg (can name whatever you want)
//  mapDispatchToProps as 2nd arg (can name whatever you want)
//  returns a function
// we then invoke the returned function from connect
//   with our presentational componenet
export default connect(mapStateToProps)(TeaIndex);
// because we only take in mapStateToProps
// we are saying that the TeaIndex component
// only cares about reading data from our redux store