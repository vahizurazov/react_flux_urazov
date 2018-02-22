import React, { Component } from 'react';
import AuthorizationUser from '../components/authorization/AuthorizationUser';
import App from './App';
import { Route, Switch, Redirect } from 'react-router-dom';

class ComponentToRender extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          Boolean(localStorage.login && localStorage.password) ? (
            <Component {...props} />
          ) : (
            <Redirect to="/authorization" />
          )
        }
      />
    );

    return (
      <Switch>
        <PrivateRoute path="/" exact component={App} />
        <Route
          path="/authorization"
          render={props =>
            !(localStorage.login && localStorage.password) ? (
              <AuthorizationUser />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    );
  }
}

export default ComponentToRender;
