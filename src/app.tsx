import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import AppBar from '@material-ui/core/AppBar';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { Login } from './componets/Login/Login';
import './styles/styles.scss';
// import './firebase/firebase.js';

const App = () => (
  <div>
    <CssBaseLine />
    <Login classes="league-app"/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));