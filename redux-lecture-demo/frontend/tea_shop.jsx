import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();
  window.store = store;

  // give the store (line 10)
  //   as a PROP to the Root component
  ReactDOM.render(<Root store={store} />, root);
});