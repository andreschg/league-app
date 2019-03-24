import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import './styles/styles.scss';

const App = () => (
  <div>
    <AppBar />
    <h1>Application</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));