import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';


const initialState = {
  1: {id: 1, 
    title: 'First', 
    body: 'First Todo', 
    done: false
  }
}; 

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  let nextState;

  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach ((todo)=> {
        nextState[todo.id] = todo;
      });
      return nextState; 
    case RECEIVE_TODO:
      nextState = Object.assign({}, state);
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
}; 


export default todosReducer;


