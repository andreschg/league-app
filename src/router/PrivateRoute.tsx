import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../componets/Header/Header';

interface PrivateRouteProps {
  exact?: boolean,
  path: string,
  isAuthenticated: boolean,
  component: React.ComponentType
}

export const PrivateRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest
}: PrivateRouteProps) => (
  <Route {...rest} component={(props: any) => 
    isAuthenticated ? (
    <div>
      <Header />
      <Component {...props} />
    </div> ) : (<Redirect to="/" />) 
  }/>
);

const mapStateToProps = (state: any) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);