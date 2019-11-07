import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginSignup from '../componets/LoginSignup/LoginSignup';
import Dashboard from '../componets/Dashboard';
import DialogsContainer from '../componets/Dialogs/DialogsContainer';
// export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginSignup} exact={true}/>
        <PrivateRoute path="/dashboard" component={Dashboard}  exact={true} />
      </Switch>
    </div>
    <DialogsContainer />
  </BrowserRouter>
);

export default AppRouter;