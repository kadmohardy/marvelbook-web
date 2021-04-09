import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
};

export default Routes;
