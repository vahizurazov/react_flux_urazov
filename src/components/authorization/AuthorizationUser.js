import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class AuthorizationUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueText: '',
      valuePassword: '',
    };
  }
  handleChangeText = event => {
    this.setState({
      valueText: event.target.value,
    });
  };

  handleChangePassword = event => {
    this.setState({
      valuePassword: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.valueText !== '' && this.state.password !== '') {
      localStorage.setItem('login', this.state.valueText);
      localStorage.setItem('password', this.state.valuePassword);
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <label htmlFor="exampleInputEmail1">Login</label>
        <input
          value={this.state.valueText}
          onChange={this.handleChangeText}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Login"
        />
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          value={this.state.valuePassword}
          onChange={this.handleChangePassword}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(AuthorizationUser);
