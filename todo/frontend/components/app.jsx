import React from 'react';
import ToDoListContainer from './todos/todo_list_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div> 
        <ToDoListContainer />
      </div>
    ); 
  }
}

export default App;