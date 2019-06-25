import React from 'react';
import TeaIndexItem from './TeaIndexItem';

// assume we are receiving all the teas as props, as an array
const TeaIndex = props => (
  <div>
    <h1>All of the Teas!</h1>
    <ul>
      { props.teas.map(tea => <TeaIndexItem tea={tea} key={tea.id} />) }
    </ul>
  </div>
);

export default TeaIndex;