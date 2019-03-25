import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import AppBar from '@material-ui/core/AppBar';
import { Login } from './componets/Login/Login';
import './styles/styles.scss';

const App = () => (
  <div>
    <Login classes="league-app"/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));