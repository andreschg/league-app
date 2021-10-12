import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { firebase } from './firebase/firebase';
import configureStore from './storage/storage';
import { login } from './storage/actions/auth';
import { stopLoading } from './storage/actions/status';
import AppComponent from './componets/App';
import './styles/styles.scss';
import { startFetchingFriends } from './storage/actions/friends';
// import './firebase/firebase.js';

const store = configureStore();

const App = () => (
  <Provider store={store} >
    <div>
      <CssBaseLine />
      <AppComponent />
    </div>
  </Provider>
);

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    store.dispatch(login(user.uid));
    
    await store.dispatch(startFetchingFriends() as any);
  }
  store.dispatch(stopLoading());
});

ReactDOM.render(<App />, document.getElementById('app'));