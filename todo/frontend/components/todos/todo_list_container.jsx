import { connect } from 'react-redux';
import receiveTodos from '../../actions/todo_actions';
import ToDoList from './todo_list';

const mapStateToProps = state => ({
  todos: Object.values(state.todos)
});

const mapDispatchProps = dispatch => ({
  receiveTodos: todo => dispatch(receiveTodos(todo))
});

export default connect(mapStateToProps, mapDispatchProps)(ToDoList);