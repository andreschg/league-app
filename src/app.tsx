import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import AppBar from '@material-ui/core/AppBar';
import CssBaseLine from '@material-ui/core/CssBaseline';
// import { Login } from './componets/LoginSignup/Login';
import LoginSignup from './componets/LoginSignup/LoginSignup';
import configureStore from './storage/storage';
import { startAddPlayer } from './storage/actions/players';
import './styles/styles.scss';
// import './firebase/firebase.js';

const store = configureStore();
const testPlayer = {
  id: '123',
  name: 'andres',
  teams: new Array<any>(),
  matches: new Array<any>()
};

store.dispatch<any>(startAddPlayer(testPlayer));

const App = () => (
  <div>
    <CssBaseLine />
    <LoginSignup classes="league-app"/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));