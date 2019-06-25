import React from 'react';

// Provider wraps our app, gives it access to the store
//  (though not directly, stay tuned)
import { Provider } from 'react-redux';

// we want to use the wrapped version of our presentational compoenent
// aka the compoenent with props from the redux store
import TeaIndexContainer from './TeaIndexContainer';
import TeaFormContainer from './TeaFormContainer';

// remember, root took in a prop named "store"
// prop to provider MUST be named store
// store={props.store} -> we are interpolating the value of props.store
const Root = (props) => ( // implicit return
  <Provider store={props.store}>
    <TeaIndexContainer />
    <TeaFormContainer />
  </Provider>
);

// es6 destructuring
// const Root = ({ store }) => (
//   <Provider store={store}>
//     <h1>REACT IS WORKING!!</h1>
//   </Provider>
// );

export default Root;