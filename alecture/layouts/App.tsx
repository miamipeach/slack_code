import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect to={'/login'} path={'/'} exact />
      <Route path={'/login'} component={Login} />
      <Route path={'/signup'} component={SignUp} />
    </Switch>
  );
};

export default App;
