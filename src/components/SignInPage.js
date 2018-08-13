import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUpPage';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) => (
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          type="text"
          onChange={e => this.setState(byPropKey('email', e.target.value))}
          placeholder="Email Address"
        />
        <input
          value={password}
          type="password"
          onChange={e => this.setState(byPropKey('password', e.target.value))}
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
