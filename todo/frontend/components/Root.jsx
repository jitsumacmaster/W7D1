import React from 'react';
import App from './app';
import { Provider } from "react-redux"; 

import allTodos from '../reducers/selectors';

const Root = ({store}) => (
  <Provider store = {store}>
    <App />
  </Provider>
);



export default Root;