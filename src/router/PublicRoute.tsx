import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

interface PublicRouteProps {
  exact?: boolean,
  path: string,
  isAuthenticated: boolean,
  component: React.ComponentType
}

export const PublicRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest
}: PublicRouteProps) => (
  <Route {...rest} component={(props: any) => 
    !isAuthenticated ? (
    <div>
      <Component {...props} />
    </div> ) : (<Redirect to="/dashboard" />) 
  }/>
);

const mapStateToProps = (state: any) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);