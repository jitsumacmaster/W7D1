import React from 'react';

const TeaIndexItem = props => (
  <li>
    <p>{props.tea.type}</p>
    <p>{props.tea.amount}</p>
  </li>
);
export default TeaIndexItem;