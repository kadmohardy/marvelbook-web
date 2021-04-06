import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
};

export default Routes;
