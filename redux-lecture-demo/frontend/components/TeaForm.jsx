import React from 'react';

class TeaForm extends React.Component {
  constructor(props) {
    super(props);

    // local state
    // for forms, we want inputs to be reflected in local state
    this.state = {
      id: 1,
      type: '',
      amount: ''
    };

    this.updateAmount = this.updateAmount.bind(this);
    this.updateType = this.updateType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateType(e) {
    this.setState({
      type: e.currentTarget.value // FOR A06, USE TARGET!!!
    });
  }

  updateAmount(e) {
    this.setState({
      amount: e.currentTarget.value //
    });
  }

  handleSubmit(e) {
    e.preventDefault(); // prevent a GET request (prevent refresh page)
    // how do we dispatch action?
    // connect to redux store
    // we need a container!!
    // our container gave us this "receiveTea" prop
    //  that is a function
    // that when invoked, dispatches an action
    this.props.receiveTea(this.state);

    // clear the form
    // NOTE: the id is hacky
    //  you will work with actual id's tomorrow
    this.setState({
      id: this.state.id + 1,
      type: '',
      amount: ''
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Tea</h2>
        <label>Type:
          <input
            type="text"
            value={this.state.type}
            onChange={this.updateType}
          />
        </label>
        <label>Amount:
          <input
            type="text"
            value={this.state.amount}
            onChange={this.updateAmount}
          />
        </label>
        <input type="submit" value="Add New Tea!!" />
      </form>
    );
  }
}

export default TeaForm;