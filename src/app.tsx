import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseLine from '@material-ui/core/CssBaseline';
import LoginSignup from './componets/LoginSignup/LoginSignup';
import { firebase } from './firebase/firebase';
import configureStore from './storage/storage';
import { login } from './storage/actions/auth';
import AppRouter from './router/AppRouter';
import Loading from './componets/Loading';
import './styles/styles.scss';
// import './firebase/firebase.js';

interface AppProps {
  isLoading: boolean
}

const store = configureStore();
let isLoading = true;

const App = (props: AppProps) => (
  <Provider store={store} >
    <div>
      <CssBaseLine />
      { props.isLoading ? <Loading /> : <AppRouter /> }      
    </div>
  </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
  }
  isLoading = false;

});

ReactDOM.render(<App isLoading={isLoading} />, document.getElementById('app'));