import { connect } from 'react-redux';

import TeaForm from './TeaForm';

import { receiveTea } from '../actions/tea_actions';
// NO MAP STATE TO PROPS
//  we don't care about reading any data from redux store

// allows us to update our redux store
//  can hand down functions to components as props
//  these functions take in data
//  and will call dispatch with an action (result of calling action creator)
const mapDispatchToProps = dispatch => ({
  // propName: function that takes in arg
  //   and dispatches action creator with that arg
  receiveTea: tea => dispatch(receiveTea(tea))
});

export default connect(null, mapDispatchToProps)(TeaForm);