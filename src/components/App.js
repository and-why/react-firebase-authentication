import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing'
import SignUpPage from './SignUp'
import SignInPage from './SignIn'
import PasswordForgetPage from './PasswordForget'
import HomePage from './Home'
import AccountPage from './Account'

import * as routes from '../constants/routes';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />

      <Route
        exact path={routes.SIGN_UP}
        components={() => <LandingPage />}  
      />
      <Route
        exact path={routes.SIGN_UP}
        components={() => <SignUpPage />}  
      />
      <Route
        exact path={routes.SIGN_UP}
        components={() => <SignInPage />}  
      />
      <Route
        exact path={routes.SIGN_UP}
        components={() => <PasswordForgetPage />}  
      />
      <Route
        exact path={routes.SIGN_UP}
        components={() => <HomePage />}  
      />
      <Route
        exact path={routes.SIGN_UP}
        components={() => <AccountPage />}  
      />
    </div>
  </Router>
)

export default App;
